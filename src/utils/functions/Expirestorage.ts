interface ILocalStorageData {
  expireAt?: Date;
  value: string;
}

const ExpireStorage = () => {
  /**
   * @name getItem
   * @description retrieves an item from localStorage. Or removes it if the expiry date has been exceeded
   * @param {string} key - the key of the value to retrieve
   * @return {Promise<string | undefined>} - The p`romise with the item or undefined.
   */
  const getItem = (key: string): string | undefined => {
    let data: string | null = localStorage.getItem(key);
    let parsedData: ILocalStorageData | null = data ? JSON.parse(data) : null;

    if (parsedData && parsedData.expireAt && new Date(parsedData.expireAt) < new Date()) {
      localStorage.removeItem(key);
      parsedData = null;
    }
    return parsedData?.value;
  };

  /**
   * @name setItem
   * @description sets an item to localStorage with the expiration date.
   * @param {string} key - the key to set the value
   * @param {string} value - The value to be set
   * @param {number} expireInterval - The expiration interval in hours
   * @return {Promise<void>} - An empty promise
   */
  const setItem = (key: string, value: string, expireInterval?: number): void => {
    const storageData: ILocalStorageData = { value };
    if (expireInterval) {
      const expireAt = _getExpireDate(expireInterval);
      storageData.expireAt = expireAt;
    } else {
      let data: string | null = localStorage.getItem(key);
      const expireAt = data && JSON.parse(data)?.expireAt;
      storageData.expireAt = expireAt;
    }
    const objectToStore = JSON.stringify(storageData);
    return localStorage.setItem(key, objectToStore);
  };

  /**
   * @name removeItem
   * @description remove an item from localStorage
   * @param {string} key - the key to remove the value
   * @return {Promise<void>} - An empty promise
   */
  const removeItem = (key: string): void => {
    return localStorage.removeItem(key);
  };

  const _getExpireDate = (expireInterval: number): Date => {
    const now = new Date();
    const expireTime = new Date(now);
    expireTime.setHours(now.getHours() + expireInterval);
    return expireTime;
  };

  return { getItem, setItem, removeItem };
};

export default ExpireStorage();
