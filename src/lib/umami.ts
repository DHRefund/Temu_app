import umami from "@umami/node";

umami.init({
  websiteId: "ca968030-8ede-4115-9109-1393886bbb39", // Your website id
  hostUrl: "https://cloud.umami.is", // URL to your Umami instance
});

export const umamiTrackCheckoutSuccessEvent = async (payload: { [key: string]: string | number | Date }) => {
  await umami.track("checkout_success", payload);
};
