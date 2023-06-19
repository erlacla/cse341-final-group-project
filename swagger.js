const swaggerAutogen = require("swagger-autogen")();

const doc = {
  info: {
    title: "LibraryServe API",
    description:
      "LibraryServe API provides information about the library, books, book history and library card holders.",
    version: "1.0.0",
  },
  host: "localhost:8080",
  schemes: ["http"],
  tags: [
    { name: "library", description: "Get library information." },
    { name: "book", description: "Get general book information." },
    { name: "account", description: "Get card holder account information." },
    {
      name: "status",
      description: "Get book information about its current status.",
    },
    {
      name: "history",
      description: "Get book information about its check out history.",
    },
  ],
  components: {
    schemas: {
      library: {
        type: "object",
        properties: {
          name: {
            type: "string",
          },
          email: {
            type: "string",
          },
          address: {
            type: "string",
          },
          phone: {
            type: "integer",
            format: "int32",
            example: "1234567890",
          },
          Hours: {
            type: "string",
            example: "8AM - 8PM",
          },
          schedule: {
            type: "string",
            example: "M-F",
          },
          image: {
            type: "string",
            example: "image_example.com",
          },
          links: {
            type: "list",
            example: ["facebook.com", "instagram.com"],
          },
        },
      },
      book: {
        type: "object",
        properties: {
          name: {
            type: "string",
          },
          author: {
            type: "string",
          },
          publishDate: {
            type: "string",
          },
          publichInfo: {
            type: "string",
          },
          isbn: {
            type: "string",
          },
          format: {
            type: "string",
          },
          edition: {
            type: "string",
          },
          description: {
            type: "string",
          },
          abstract: {
            type: "string",
          },
          genre: {
            type: "string",
          },
          status: {
            type: "string",
          },
          images: {
            type: "list",
            example: ["image1", "image2"],
          },
        },
      },
      account: {
        type: "object",
        properties: {
          firstName: {
            type: "string",
          },
          lastName: {
            type: "string",
          },
          address: {
            type: "string",
          },
          phone: {
            type: "string",
          },
          image: {
            type: "string",
          },
          books: {
            type: "string",
            example: "none",
          },
          holds: {
            type: "string",
            example: "none",
          },
        },
      },
      status: {
        type: "object",
        properties: {
          bookId: {
            type: "string",
          },
          accountId: {
            type: "string",
          },
          checkedOut: {
            type: "string",
          },
          returnDate: {
            type: "string",
          },
          checkedIn: {
            type: "string",
          },
        },
      },
      history: {
        type: "object",
        properties: {
          bookId: {
            type: "string",
          },
        },
      },
    },
  },
};

const outputFile = "./swagger.json";
const endpointsFiles = ["./routes/index.js"];

// generate swagger.json
swaggerAutogen(outputFile, endpointsFiles, doc);

// Run server after it gets generated
// swaggerAutogen(outputFile, endpointsFiles, doc).then(async () => {
//   await import('./server.js');
// });
