export const getJSON = async function (url) {
  try {
    const res = await fetch(url);
    const data = await res.json();
    if (!res.ok) throw new Error(`${data.message} ${res.status}`);
    return data;
  } catch (err) {
    throw err;
  }
};

export const sendJSON = async function (url, uploadData) {
  try {
    const res = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(uploadData),
    });
    const data = await res.json();
    if (!res.ok) throw new Error(`${data.message} ${res.status}`);
    console.log(res);
    return data;
  } catch (err) {
    throw err;
  }
};

export const editJSON = async function (url, uploadData) {
  try {
    const res = await fetch(url, {
      method: "PUT",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(uploadData),
    });

    if (!res.ok) throw new Error(`${res.status}`);
    const data = res.json();
    console.log(res, data);
    return data;
  } catch (err) {
    throw err;
  }
};

export const deleteJSON = async function (url) {
  try {
    const res = await fetch(url, {
      method: "DELETE",
      headers: {
        "Content-type": "application/json",
      },
    });
    if (!res.ok) throw new Error(`${res.status}`);
    const data = await res.json();
    return data;
  } catch (err) {
    throw err;
  }
};
