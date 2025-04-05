'use client';

export default function AboutUsSection() {
    return (
        <section className="bg-white py-12 px-6 md:px-12 lg:px-24 text-gray-800 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">About Us</h2>
            <p className="text-gray-700 mx-auto mb-6">
                We have over almost 40 years of experience in alterations and dressmaking. We specialize in formal 
                women’s and menswear – Gowns, Dresses, and Suits. Now, we also offer custom-made suits, sales, and suit hire.
            </p>
            
            <div className="flex justify-center mb-6">
                <div className="w-24 h-24 bg-black rounded-full flex items-center justify-center">
                    <span className="text-white text-4xl">🧵</span>
                </div>
            </div>

            <div className="mx-auto text-gray-700 space-y-4">
                <h3 className="font-bold">Our Location & Contact</h3>
                <p><strong>ADDRESS:</strong> 611 Flinders Street, Townsville</p>
                <p><strong>PHONE:</strong> 07 47 241368</p>
                <a href='mailto:Sales@TownsvilleAlterationsFormalWear.com'><strong>EMAIL:</strong> <span className="text-yellow-300">Sales@TownsvilleAlterationsFormalWear.com</span></a>
            </div>
        </section>
    );
}
