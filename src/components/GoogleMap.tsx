// /src/components/GoogleMap.tsx
const GoogleMap = () => {
  return (
    <div className="mt-5">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3651.122905179572!2d90.40522341498102!3d23.786263114711324!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c78771a26741%3A0x8fa087df4b17f700!2sLuminous%20Dental%20Care!5e0!3m2!1sen!2sbd!4v1678622991775!3m2!1sen!2sbd"
        width="100%"
        height="450"
        style={{ border: 0 }}
        allowFullScreen={true}  // This is where the error occurred. Now it's properly typed.
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  );
};

export default GoogleMap;
