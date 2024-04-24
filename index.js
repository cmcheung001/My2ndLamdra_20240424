module.exports.handler = async (event) => {
  return {
    statusCode: 200,
    body: JSON.stringify(
      {
        message: "Jeremy Get again again Let's try UAT Stage - 0003 Go Serverless v3.0! Your function executed successfully!",
        input: event,
      },
      null,
      2
    ),
  };
};

module.exports.posthandler = async (event) => {
  return {
    statusCode: 200,
    body: JSON.stringify(
      {
        message: "Jeremy Post again again Let's try UAT Stage - 0003 Go Serverless v3.0! Your function executed successfully!",
        input: event,
      },
      null,
      2
    ),
  };
};
