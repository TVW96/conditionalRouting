export default {
    reporters: [
      "default",
      [
        "jest-junit",
        {
          outputName: "junit.xml"
        }
      ]
    ]
  };
  