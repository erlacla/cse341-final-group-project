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
            format: "email",
            example: "library@email.com",
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
            type: "array",
            example: ["facebook.com", "instagram.com"],
          },
          image: {
            required: false,
            description: "Upload an image for the library.",
            type: "string",
            format: "base64",
          },
        },
      },
      book: {
        type: "object",
        properties: {
          libraryId: {
            type: "string",
          },
          name: {
            type: "string",
          },
          author: {
            type: "string",
          },
          publishDate: {
            type: "string",
          },
          publishInfo: {
            type: "string",
          },
          isbn: {
            type: "number",
            example: "9783161484100",
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
          image: {
            required: false,
            description: "Upload an image for the book.",
            type: "string",
            format: "base64",
          },
        },
      },
      account: {
        type: "object",
        properties: {
          libraryId: {
            type: "string",
          },
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
            type: "number",
            example: "1234567890",
          },
          books: {
            type: "array",
            example: ["book1", "book2", "book3"],
          },
          holds: {
            type: "array",
            example: ["book1", "book2", "book3"],
          },
          image: {
            required: false,
            description: "Upload an image for the account.",
            type: "string",
            format: "base64",
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
            format: "date",
          },
          returnDate: {
            type: "string",
            format: "date",
          },
          checkedIn: {
            type: "boolean",
            example: false,
          },
        },
      },
      history: {
        type: "object",
        properties: {
          bookId: {
            type: "string",
          },
          history: {
            type: "object",
            items: {
              statusId: {
                type: "string",
              },
              accountId: {
                type: "string",
              },
              checkedOut: {
                type: "string",
                format: "date",
              },
              returnDate: {
                type: "string",
                format: "date",
              },
              checkedIn: {
                type: "boolean",
              },
            },
            example: {
              statusId: "string",
              accountId: "string",
              checkedOut: "YYYY-MM-DD",
              returnDate: "YYYY-MM-DD",
              checkedIn: true,
            },
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
