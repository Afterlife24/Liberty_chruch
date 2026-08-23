interface SectionTitleProps {
  title: string;
}

export default function SectionTitle({ title }: SectionTitleProps) {
  return (
    <div className="flex items-center gap-4 mb-5">
      <h2 className="font-condensed font-bold text-xl md:text-2xl uppercase tracking-wide whitespace-nowrap text-gray-900">
        {title}
      </h2>
      <div className="flex-1 h-px bg-gray-300" />
    </div>
  );
}
