export const sanitizePhone = (phone: string): string => {
    return phone.replace(/\D/g, '');
};
