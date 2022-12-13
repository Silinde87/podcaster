export const stringToDateDDMMYYYY = (stringDate: string) =>
  new Date(stringDate).toLocaleDateString('es-ES');
