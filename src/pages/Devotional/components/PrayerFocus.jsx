import React from 'react'

function PrayerFocus({item}) {
  return (
    <div className="prayer_focus mb-5 pb-4 text_prayer p-2 text-justify">
      <span className="text d-block text-primary ">Prayer Focus:</span>

      {item.prayer_focus}
    </div>
  );
}

export default PrayerFocus