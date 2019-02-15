//@flow

let path = '/';

export default (app) => {
  app.get(path, (req, res) => res.send('Hello World!'));
};
