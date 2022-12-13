export const EpochToDateDDMMYYYY = (epochTime: number) =>
  new Date(epochTime).toLocaleDateString('es-ES');
