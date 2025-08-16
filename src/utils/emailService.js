export const sendEmail = async (name, email, message) => {
    try {
        // In a real application, you would call your backend API here
        // For demonstration, we'll simulate a successful response
        console.log(`Email would be sent to: ${email}`);
        console.log(`Message content: ${message}`);

        // Simulate network delay
        await new Promise(resolve => setTimeout(resolve, 1000));

        return true;
    } catch (error) {
        console.error('Error sending email:', error);
        return false;
    }
};