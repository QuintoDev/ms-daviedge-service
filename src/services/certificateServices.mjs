import crypto from "crypto";

const verifyCert = (data) => {
    try {
        const normalizedData = data.trim();
        if (!normalizedData.includes('-----BEGIN CERTIFICATE-----') || !normalizedData.includes('-----END CERTIFICATE-----')) {
            throw new Error('El certificado no contiene el encabezado -----BEGIN CERTIFICATE----- o -----END CERTIFICATE-----');
        } else {
            const cert = new crypto.X509Certificate(normalizedData);
            console.log('Certificado verificado correctamente');

            return cert.serialNumber;
        }

    } catch (error) {
        console.error('Error al verificar el certificado:', error.message);
    }

}

export { verifyCert };
