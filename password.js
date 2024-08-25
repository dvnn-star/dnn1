let password1 = document.querySelector("#password1");
let password2 = document.querySelector("#password2");
function generatepass(len) {
  const hurufbesar = "ABCDEFGHIKKLMNOPQRSTUVWXYZ";
  const nomor = "123456789";
  const huruf = "abcdefghijklmnopqrstuvwxyz";
  const symbol = "!@#$%^&*()_+-=";
  const data = huruf + nomor + symbol + hurufbesar;
  let generate = "";
  for (let index = 0; index < len; index++) {
    generate += data[~~(Math.random() * data.length)];
  }
  return generate;
}
const getpass = () => {
  const generates = generatepass(password1.value);
  password2.value = generates;
};

const savepassword = () => {
  document.title = password2.value;
  saveButton.setAttribute(
    "href",
    "data:text/plain;charset=utf-8," +
      encodeURIComponent(`password saya: ${document.title}`)
  );
  saveButton.setAttribute("download", "MyPasswordGeneratorLOG.txt");
};
