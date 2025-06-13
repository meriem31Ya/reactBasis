export const getData = async (pathname = "") => {
  try {
    const res = await fetch(
      "https://api.escuelajs.co/api/v1/products" + pathname
    );
    const data = await res.json();
    console.log({ data });
    return data;
  } catch (error) {
    return error;
  }
};
