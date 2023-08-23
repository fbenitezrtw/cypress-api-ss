module.exports = (on, config) => {
  on('task', {
    makeApiCall() {
      return new Promise((resolve, reject) => {
        request('https://api.publicapis.org/', (error, response, body) => {
          if (error) {
            reject(error);
          } else {
            resolve({
              statusCode: response.statusCode,
              body: body
            });
          }
        });
      });
    }
  });
};