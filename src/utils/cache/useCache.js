const useCache = () => {
  const CACHE = {};

  return {
    getEntryFromCache(key) {
      if (!key || typeof key !== 'string' || !CACHE[key]) return null;
      return CACHE[key];
    },
    saveEntryToCache(key, value) {
      CACHE[key] = value;
    },
  };
};

module.exports = useCache;
