import crypto from "crypto";

/**
 * Validates a certificate in plain text
 * @param {string} data - Certificate in PEM format
 * @param {Object} options - { mode: 'validate' | 'read' }
 * @returns {string}
 */
const validateCertificate = (data, { mode = 'validate' } = {}) => {
    try {
        const normalizedData = data.trim();

        if (
            !normalizedData.includes('-----BEGIN CERTIFICATE-----') ||
            !normalizedData.includes('-----END CERTIFICATE-----')
        ) {
            return 'El texto no contiene un certificado válido en formato PEM.';
        }

        const cert = new crypto.X509Certificate(normalizedData);

        if (mode === 'read') {
            return `Información del certificado:\n\n` +
                `Serial: ${cert.serialNumber}\n` +
                `Emitido por: ${cert.issuer}\n` +
                `Válido desde: ${cert.validFrom}\n` +
                `Hasta: ${cert.validTo}`;
        }

        const now = new Date();
        const isValid = new Date(cert.validFrom) <= now && now <= new Date(cert.validTo);

        return isValid
            ? `Certificado válido.\nSerial: ${cert.serialNumber}\nVálido hasta: ${cert.validTo}`
            : `Certificado expirado o aún no vigente.\nVálido desde: ${cert.validFrom}\nHasta: ${cert.validTo}`;
    } catch (err) {
        return `Error al procesar el certificado: ${err.message}`;
    }
};

export { validateCertificate };
