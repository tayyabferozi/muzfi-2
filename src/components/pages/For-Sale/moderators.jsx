export default function Moderators() {
  return (
    <section>
      <p class='text-lg font-semibold'>Moderators</p>
      <div className='space-y-2'>
        {data.map((_) => (
          <p className='text-sm font-medium'>{_}</p>
        ))}
      </div>
    </section>
  );
}
const data = [
  'u/SeriesOfAdjectives',
  'u/viperfan7',
  'u/ManofTheNightsWatch',
  'u/Kesha_Paul',
  'u/Mr_Quinn',
  'u/brittersbear',
  'u/Stuttero',
  'u/MAGIC_EYE_BOT',
];
