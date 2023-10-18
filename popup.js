export async function getFormData(url) {
   // Default options are marked with *
  const PopUpSettings = await fetch(url, {
      method: 'GET',
      headers: {
         "Content-Type": "application/json",
      },
   }).then((data) => data.json()).then((form) => form?.response?.data?.popup_settings);
   console.log(PopUpSettings);
   getElement();
}

function getElement() {
   const element = document.getElementById('652e2f3faae4c1cc8328da36');
   // element.querySelector('[data-type="popup"]');
   console.log(element);
}
