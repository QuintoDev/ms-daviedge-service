import { logger } from '../utils/logger.mjs';
import { validateCertificate } from '../services/certificateServices.mjs';

/**
 * Handles chat messages.
 * @param {*} msg 
 * @returns 
 */
const handlerChat = async (msg) => {
    const userId = (msg.user?.name || 'Unknown User ID').replace(/^users\//, '');
    const user = msg.user?.displayName || msg.user?.name || 'Usuario';
    const rawText = msg.message?.argumentText || '';
    const cleaned = rawText.trim().toLowerCase();

    let responseText = 'Lo siento, no entendí tu mensaje.';

    // Initial greeting
    if (cleaned.includes('hola')) {
        responseText = `¡Hola ${user}! Escribe "servicios" para conocer lo que puedo hacer.`;

        // Service inquiry
    } else if (cleaned.includes('servicios')) {
        responseText = `Estos son los servicios disponibles:\n\n` +
            `* Cargar certificado SSL → escribe "cargar_cert"\n` +
            `* Leer certificado SSL → escribe "leer_cert"`;

        // Specific commands for loading or reading certificates
    } else if (cleaned === 'cargar_cert') {
        responseText = 'Por favor, pega el certificado en texto plano.';

    } else if (cleaned === 'leer_cert') {
        responseText = 'Por favor, pega el certificado y te mostraré su contenido.';

        // Validate or read certificate
    } else if (cleaned.includes('begin certificate')) {
        const pemMatch = rawText.match(/-----BEGIN CERTIFICATE-----[\s\S]+?-----END CERTIFICATE-----/);
        if (pemMatch) {
            responseText = await validateCertificate(pemMatch[0], {
                mode: cleaned.includes('leer') ? 'read' : 'validate'
            });
        } else {
            responseText = 'No se detectó un certificado válido en el texto.';
        }

    } else {
        responseText = '¿Podrías escribir "hola" o "servicios" para comenzar?';
    }

    logger.info(`Response: ${responseText}`, { traceId: userId });
    return responseText;
};

export { handlerChat };