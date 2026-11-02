import SectionTitle from './SectionTitle';

export default function Welcome() {
  return (
    <section className="max-w-5xl mx-auto px-4 py-10">
      <h1 className="sr-only">Liberty Church — Newport &amp; Risca, Wales</h1>
      <SectionTitle title="Welcome" />
      <p className="text-gray-700 text-sm leading-relaxed">
        Welcome to Liberty Church, a vibrant family of hope filled believers based in Newport and
        Risca, South Wales. We gather each Sunday at our Liberty Gaer Hub on Gaer Park Drive, Newport,
        and at Liberty Risca. Here at Liberty, we see a church who know and demonstrate the love of
        God — a people empowered and anointed to help rebuild, restore and renew people's lives,
        communities and nations. A people who walk in the freedom of who God created them to be
        reflecting His glory and honour.
      </p>
    </section>
  );
}
