module.exports = {
  app: {
    port: 3000
  },
  database: {
    connection: "mongodb+srv://ngockiet:ngockiet123123@cluster0.yle50.mongodb.net/shopping?retryWrites=true&w=majority",
    option: 	{
      useNewUrlParser:true,
      useUnifiedTopology: true
    }
  },
  session: {
    key: '27bda112-99dd-4496-8015-ea20d1034228'
  }
};
