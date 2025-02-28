import { Card } from "@/components/ui/card"; // Assuming you're using ShadCN Card component

export default function ServicesSection() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-12">
          We offer a wide range of Prosthetic, Cosmetic & Surgical Treatments
        </h2>
        <p className="text-lg text-center mb-8">
          "With us you get a completely painless and professional treatment in a relaxed and stress-free environment."
        </p>
        <p className="text-center text-gray-600 mb-12">
          Mercede G. Rasmussen, Dentist DDS, MSc & Clinic Owner
        </p>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {/* Service 1 */}
          <Card className="bg-white rounded-lg p-6 transition-transform duration-300 hover:scale-105">
            <h3 className="text-xl font-semibold mb-4">Examination</h3>
            <p className="text-gray-600 mb-4">
              A dental examination involves a review of the condition of the teeth and possible problems that require treatment.
            </p>
            <a href="#" className="text-blue-500 hover:underline">Read more</a>
          </Card>

          {/* Service 2 */}
          <Card className="bg-white rounded-lg p-6 transition-transform duration-300 hover:scale-105">
            <h3 className="text-xl font-semibold mb-4">Caries and Plastic</h3>
            <p className="text-gray-600 mb-4">
              Cavities can be treated with plastic fillings that are placed in the damaged tooth to prevent further decay.
            </p>
            <a href="#" className="text-blue-500 hover:underline">Read more</a>
          </Card>

          {/* Service 3 */}
          <Card className="bg-white rounded-lg p-6 transition-transform duration-300 hover:scale-105">
            <h3 className="text-xl font-semibold mb-4">Root Canal Treatment</h3>
            <p className="text-gray-600 mb-4">
              Root canal treatment involves removing infection in the root canals and filling the canals to save a damaged tooth.
            </p>
            <a href="#" className="text-blue-500 hover:underline">Read more</a>
          </Card>

          {/* Service 4 */}
          <Card className="bg-white rounded-lg p-6 transition-transform duration-300 hover:scale-105">
            <h3 className="text-xl font-semibold mb-4">Crowns and Bridges</h3>
            <p className="text-gray-600 mb-4">
              Crowns and bridges are used to cover or replace damaged teeth to restore function and aesthetics.
            </p>
            <a href="#" className="text-blue-500 hover:underline">Read more</a>
          </Card>

          {/* Service 5 */}
          <Card className="bg-white rounded-lg p-6 transition-transform duration-300 hover:scale-105">
            <h3 className="text-xl font-semibold mb-4">Implant</h3>
            <p className="text-gray-600 mb-4">
              Implants are a solution for replacing lost teeth, where an artificial root is implanted into the jawbone to support a denture.
            </p>
            <a href="#" className="text-blue-500 hover:underline">Read more</a>
          </Card>

          {/* Service 6 */}
          <Card className="bg-white rounded-lg p-6 transition-transform duration-300 hover:scale-105">
            <h3 className="text-xl font-semibold mb-4">Surgery</h3>
            <p className="text-gray-600 mb-4">
              May include wisdom teeth removal, treatment of gum problems, and reconstruction of the jawbone with implants.
            </p>
            <a href="#" className="text-blue-500 hover:underline">Read more</a>
          </Card>

          {/* Service 7 */}
          <Card className="bg-white rounded-lg p-6 transition-transform duration-300 hover:scale-105">
            <h3 className="text-xl font-semibold mb-4">Teeth Whitening</h3>
            <p className="text-gray-600 mb-4">
              Teeth whitening is a cosmetic treatment that uses bleach to remove stains and discolorations on teeth and improve their appearance.
            </p>
            <a href="#" className="text-blue-500 hover:underline">Read more</a>
          </Card>

          {/* Service 8 */}
          <Card className="bg-white rounded-lg p-6 transition-transform duration-300 hover:scale-105">
            <h3 className="text-xl font-semibold mb-4">Periodontitis</h3>
            <p className="text-gray-600 mb-4">
              Periodontitis is an inflammation of the gums that can lead to tooth loss if left untreated. Treatment includes surgery and antibiotics.
            </p>
            <a href="#" className="text-blue-500 hover:underline">Read more</a>
          </Card>

          {/* Service 9 */}
          <Card className="bg-white rounded-lg p-6 transition-transform duration-300 hover:scale-105">
            <h3 className="text-xl font-semibold mb-4">Dental Fear</h3>
            <p className="text-gray-600 mb-4">
              Fear of the dentist is a common fear. That's why we offer painless treatments in a safe setting and a comfortable atmosphere.
            </p>
            <a href="#" className="text-blue-500 hover:underline">Read more</a>
          </Card>

          {/* Service 10 */}
          <Card className="bg-white rounded-lg p-6 transition-transform duration-300 hover:scale-105">
            <h3 className="text-xl font-semibold mb-4">Prosthetics</h3>
            <p className="text-gray-600 mb-4">
              Dentures replace lost teeth, are individually fitted and restore the function and appearance of the dentition.
            </p>
            <a href="#" className="text-blue-500 hover:underline">Read more</a>
          </Card>

          {/* Service 11 */}
          <Card className="bg-white rounded-lg p-6 transition-transform duration-300 hover:scale-105">
            <h3 className="text-xl font-semibold mb-4">Tooth Alignment</h3>
            <p className="text-gray-600 mb-4">
              Invisalign is a revolutionary technology that uses clear plastic aligners to gradually move your teeth over time.
            </p>
            <a href="#" className="text-blue-500 hover:underline">Read more</a>
          </Card>

          {/* Service 12 */}
          <Card className="bg-white rounded-lg p-6 transition-transform duration-300 hover:scale-105">
            <h3 className="text-xl font-semibold mb-4">Dental Veneers</h3>
            <p className="text-gray-600 mb-4">
              Smile Clinic offers 'smile design' using dental veneers that can correct discolored, cracked or crooked teeth and give you a Hollywood smile.
            </p>
            <a href="#" className="text-blue-500 hover:underline">Read more</a>
          </Card>

          {/* Service 13 */}
          <Card className="bg-white rounded-lg p-6 transition-transform duration-300 hover:scale-105">
            <h3 className="text-xl font-semibold mb-4">Snoring Splint</h3>
            <p className="text-gray-600 mb-4">
              Treatment with a snoring splint is a newer treatment that has shown good effects on snoring and mild to moderate sleep apnea.
            </p>
            <a href="#" className="text-blue-500 hover:underline">Read more</a>
          </Card>
        </div>
      </div>
    </section>
  );
}
