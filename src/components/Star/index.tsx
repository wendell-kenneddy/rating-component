import Image from 'next/image';

export function Star() {
  return (
    <div className="bg-brand-med-grey/10 rounded-full p-3 flex items-center justify-center mb-6">
      <Image src="/icon-star.svg" alt="Icon of a star" width={17} height={16} />
    </div>
  );
}
