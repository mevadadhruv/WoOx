import { Loader } from "@googlemaps/js-api-loader";

const apiOptions = {
  apiKey: "",
};

const loader = new Loader(apiOptions);

loader.load().then(() => {
  console.log("Maps JS API Loaded");
});
