import { logger } from '../utils/logger.mjs';

/**
 * Handles chat messages.
 * @param {*} msg 
 * @returns 
 */
const handlerChat = async (msg) => {
    // Extract and clean the message
    const message = (msg.message?.argumentText || '');
    const cleanedMessage = message.replace(/^\s*/, "");
    logger.info(`Cleaned message: ${cleanedMessage}`);

    // Extract user information
    const user = msg.user.displayName || msg.user.name || 'Unknown User';
    logger.info(`User: ${user}`);

    let responseText = 'Lo siento, no puedo ayudar con eso.';

    if (cleanedMessage.includes('hola')) {
        responseText = '¡Hola ' + user + '!, si deseas conocer más sobre nuestros servicios, escribe "servicios".';
    }

    logger.info(`Response: ${responseText}`);

    return responseText;
}

export { handlerChat };