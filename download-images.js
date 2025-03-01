const axios = require("axios");
const fs = require("fs");
const path = require("path");

const images = [
  { url: "https://www.todaysrdh.com/wp-content/uploads/2018/08/todays-rdh-ultrasonic-scaling.jpg", filename: "ultrasonic_scaling.jpg" },
  { url: "https://www.bunkerhilldentistry.com/wp-content/uploads/2016/05/shutterstock_308947793.jpg", filename: "teeth_whitening.jpg" },
  { url: "https://www.gatewayoaksdental.com/wp-content/uploads/2020/04/fluoride-treatment.jpg", filename: "fluoride_therapy.jpg" },
  { url: "https://i.ytimg.com/vi/oqFOR5qBbfQ/maxresdefault.jpg", filename: "composite_filling.jpg" },
  { url: "https://apollodentalcare.in/wp-content/uploads/2022/07/Root-Canal-Treatment.jpg", filename: "root_canal.jpg" },
  { url: "https://www.wrfdc.com/wp-content/uploads/2022/08/AdobeStock_298746307.jpg", filename: "tooth_extraction.jpg" },
  { url: "https://i0.wp.com/post.healthline.com/wp-content/uploads/2019/07/127529-pulpectomy1296x1172-body.20190715213935401-1296x1173.png", filename: "pulpectomy.png" },
  { url: "https://decisionsindentistry.com/wp-content/uploads/2022/11/dentures-750x430.jpg", filename: "complete_denture.jpg" },
  { url: "https://northlandprosthodontics.co.nz/wp-content/uploads/2016/09/2-LOWER-METAL-PARTIAL-DENTURE-AND-A-COMPLETE-UPPER-DENTURE.jpg", filename: "partial_denture.jpg" },
  { url: "https://drnazeerdentalclinic.com/wp-content/uploads/2020/09/Zirconia-Crown-Dubai.jpg", filename: "zirconia_crown.jpg" },
  { url: "https://assets-global.website-files.com/5df99d0b0201030c89577fec/5e1d746ca12b0a50028573a4_cf3.jpeg", filename: "porcelain_crown.jpeg" },
  { url: "https://www.artdentallab.com/uploads/4/5/8/1/45819785/dsc-5912_orig.jpeg", filename: "metallic_crown.jpeg" },
  { url: "https://www.meditourturkei.com/en/wp-content/uploads/2021/07/96-2.jpg", filename: "orthodontic_appliance.jpg" }
];


const downloadImage = async ({ url, filename }) => {
  const filePath = path.resolve(__dirname, "public/images", filename);
  const writer = fs.createWriteStream(filePath);

  const response = await axios({
    url,
    method: "GET",
    responseType: "stream",
  });

  response.data.pipe(writer);

  return new Promise((resolve, reject) => {
    writer.on("finish", resolve);
    writer.on("error", reject);
  });
};

const downloadAllImages = async () => {
  for (const image of images) {
    console.log(`Downloading ${image.filename}...`);
    await downloadImage(image);
  }
  console.log("All images downloaded successfully!");
};

downloadAllImages();
