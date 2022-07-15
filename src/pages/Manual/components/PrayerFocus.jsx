import React from 'react'

function PrayerFocus({item}) {
  return (
    <div className="container prayer_focus mb-5 pb-4 text_prayer p-2 text-justify ">
      <span className="text d-block text-primary ">Summary:</span>
      {item.conclusion}
    </div>
  );
}

export default PrayerFocus