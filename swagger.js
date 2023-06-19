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
    { name: "library", description: "General library information." },
    { name: "book", description: "General book information." },
    { name: "account", description: "Card holder account information." },
    {
      name: "status",
      description: "Book information about its current status.",
    },
    {
      name: "history",
      description: "Book information about its check out history.",
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
          hours: {
            type: "string",
            example: "8AM - 8PM",
          },
          schedule: {
            type: "string",
            example: "M-F",
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
      }
    },
  },
};

const outputFile = "./swagger.json";
const endpointsFiles = ["./routes/index.js"];

// generate swagger.json
swaggerAutogen(outputFile, endpointsFiles, doc);
