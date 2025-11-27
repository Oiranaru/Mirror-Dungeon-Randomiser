// --- Base Sinners (fixed roster) ---
const sinners = [
  { id: "yi-sang", name: "Yi Sang" },
  { id: "faust", name: "Faust" },
  { id: "don-quixote", name: "Don Quixote" },
  { id: "ryoshu", name: "Ryoshu" },
  { id: "meursault", name: "Meursault" },
  { id: "hong-lu", name: "Hong Lu" },
  { id: "heathcliff", name: "Heathcliff" },
  { id: "ishmael", name: "Ishmael" },
  { id: "rodion", name: "Rodion" },
  { id: "sinclair", name: "Sinclair" },
  { id: "outis", name: "Outis" },
  { id: "gregor", name: "Gregor" }
];

// --- Identities per Sinner ---
// Each entry also includes sinnerId for safety.
const sinnerIdentities = {
  "yi-sang": [
    { id: "yi-sang-lcb", sinnerId: "yi-sang", name: "LCB Sinner", isBase: true, img: "img/IDs/yi-sang-lcb.png" },
    { id: "yi-sang-seven", sinnerId: "yi-sang", name: "Seven Assoc. South Section 6", img: "img/IDs/yi-sang-seven.png"},
    { id: "yi-sang-molar", sinnerId: "yi-sang", name: "Molar Officer Fixer", img: "img/IDs/yi-sang-molar.png"},
    { id: "yi-sang-pequod", sinnerId: "yi-sang", name: "The Pequod First Mate", img: "img/IDs/yi-sang-pequod.png"},
    { id: "yi-sang-dieci", sinnerId: "yi-sang", name: "Dieci Assoc. South Section 4", img: "img/IDs/yi-sang-dieci.png"},
    { id: "yi-sang-lceego", sinnerId: "yi-sang", name: "LCE EGO: Lantern", img: "img/IDs/yi-sang-lceego.png"},
    { id: "yi-sang-blade", sinnerId: "yi-sang", name: "Blade Lineage Salsu", img: "img/IDs/yi-sang-blade.png"},
    { id: "yi-sang-efflorescedego", sinnerId: "yi-sang", name: "Effloresced EGO: Spicebush", img: "img/IDs/yi-sang-efflorescedego.png"},
    { id: "yi-sang-wcorp", sinnerId: "yi-sang", name: "W.Corp L3 Cleanup Agent", img: "img/IDs/yi-sang-wcorp.png"},
    { id: "yi-sang-ring", sinnerId: "yi-sang", name: "The Ring Pointillist Student", img: "img/IDs/yi-sang-ring.png"},
    { id: "yi-sang-lobotomyego", sinnerId: "yi-sang", name: "Lobotomy EGO: Solemn Lament", img: "img/IDs/yi-sang-lobotomyego.png"},
    { id: "yi-sang-liu", sinnerId: "yi-sang", name: "Liu Assoc. South Section 3", img: "img/IDs/yi-sang-liu.png"},
    { id: "yi-sang-ncorpego", sinnerId: "yi-sang", name: "N Corp EGO: Fell Bullet", img: "img/IDs/yi-sang-ncorpego.png"},
    { id: "yi-sang-heishou", sinnerId: "yi-sang", name: "Heishou Pack - Wu Branch Adept", img: "img/IDs/yi-sang-heishou.png"},
    // Add new Yi Sang IDs here
  ],

  "faust": [
    { id: "faust-lcb", sinnerId: "faust", name: "LCB Sinner", isBase: true, img: "img/IDs/faust-lcb.png" },
    { id: "faust-wcorp", sinnerId: "faust", name: "W Corp. L2 Cleanup Agent", img: "img/IDs/faust-wcorp.png" },
    { id: "faust-lobotomycorp", sinnerId: "faust", name: "Lobotomy Corp. Remnant", img: "img/IDs/faust-lobotomycorp.png"},
    { id: "faust-zwei", sinnerId: "faust", name: "Zwei Assoc. South Section 4", img: "img/IDs/faust-zwei.png"},
    { id: "faust-wuthering", sinnerId: "faust", name: "Wuthering Heights Butler", img: "img/IDs/faust-wuthering.png"},
    { id: "faust-ncorp", sinnerId: "faust", name: "The One Who Grips", img: "img/IDs/faust-ncorp.png"},
    { id: "faust-seven", sinnerId: "faust", name: "Seven Assoc. South Section 4", img: "img/IDs/faust-seven.png"},
    { id: "faust-lobotomyego", sinnerId: "faust", name: "Lobotomy EGO: Regret", img: "img/IDs/faust-lobotomyego.png"},
    { id: "faust-blade", sinnerId: "faust", name: "Blade Lineage Salsu", img: "img/IDs/faust-blade.png"},
    { id: "faust-multicrack", sinnerId: "faust", name: "MultiCrack Office Rep", img: "img/IDs/faust-multicrack.png"},
    { id: "faust-lceego", sinnerId: "faust", name: "LCE EGO: Ardor Blossom Star", img: "img/IDs/faust-lceego.png"},
    { id: "faust-heishou", sinnerId: "faust", name: "Heishou Pack - Mao Branch Adept", img: "img/IDs/faust-heishou.png"},
    { id: "faust-shi", sinnerId: "faust", name: "Shi Assoc. East Section 3", img: "img/IDs/faust-shi.png"},
    // Add new Faust IDs here
  ],

  "don-quixote": [
    { id: "don-quixote-lcb", sinnerId: "don-quixote", name: "LCB Sinner", isBase: true, img: "img/IDs/don-quixote-lcb.png" },
    { id: "don-quixote-shi", sinnerId: "don-quixote", name: "Shi Assoc. South Section 5 Director", img: "img/IDs/don-quixote-shi.png"},
    { id: "don-quixote-ncorp", sinnerId: "don-quixote", name: "N Corp. Mittelhammer", img: "img/IDs/don-quixote-ncorp.png"},
    { id: "don-quixote-lobotomyego", sinnerId: "don-quixote", name: "Lobotomy EGO: Lantern", img: "img/IDs/don-quixote-lobotomyegolantern.png"},
    { id: "don-quixote-blade", sinnerId: "don-quixote", name: "Blade Lineage Salsu", img: "img/IDs/don-quixote-blade.png"},
    { id: "don-quixote-wcorp", sinnerId: "don-quixote", name: "W Corp. L3 Cleanup Agent", img: "img/IDs/don-quixote-wcorp.png"},
    { id: "don-quixote-cinq", sinnerId: "don-quixote", name: "Cinq Assoc. South Section 5 Director", img: "img/IDs/don-quixote-cinqsouth.png"},
    { id: "don-quixote-middle", sinnerId: "don-quixote", name: "The Middle Little Sister", img: "img/IDs/don-quixote-middle.png"},
    { id: "don-quixote-tcorp", sinnerId: "don-quixote", name: "T.Corp. Class 3 Collection Staff", img: "img/IDs/don-quixote-tcorp.png"},
    { id: "don-quixote-bloodfiend", sinnerId: "don-quixote", name: "The Manager of La Manchaland", img: "img/IDs/don-quixote-bloodfiend.png"},
    { id: "don-quixote-cinq", sinnerId: "don-quixote", name: "Cinq Assoc. East Section 3", img: "img/IDs/don-quixote-cinqeast.png"},
    { id: "don-quixote-lobotomyego", sinnerId: "don-quixote", name: "Lobotomy EGO: In the Name of Love and Hate", img: "img/IDs/don-quixote-lobotomyegolovehate.png"},
    { id: "don-quixote-heishou", sinnerId: "don-quixote", name: "Heishou Pack - Wei Branch", img: "img/IDs/don-quixote-heishou.png"},
    // Add new Don IDs here
  ],

  "ryoshu": [
    { id: "ryoshu-lcb", sinnerId: "ryoshu", name: "LCB Sinner", isBase: true, img: "img/IDs/ryoshu-lcb.png" },
    { id: "ryoshu-seven", sinnerId: "ryoshu", name: "Seven Assoc. South Section 6", img: "img/IDs/ryoshu-seven.png"},
    { id: "ryoshu-lccb", sinnerId: "ryoshu", name: "LCCB Assistant Manager", img: "img/IDs/ryoshu-lccb.png"},
    { id: "ryoshu-liu", sinnerId: "ryoshu", name: "Liu Assoc. South Section 4", img: "img/IDs/ryoshu-liu.png"},
    { id: "ryoshu-yurodivy", sinnerId: "ryoshu", name: "District 20 Yurodivy", img: "img/IDs/ryoshu-yurodivy.png"},
    { id: "ryoshu-kurokumo", sinnerId: "ryoshu", name: "Kurokumo Clan Wakashu", img: "img/IDs/ryoshu-kurokumo.png"},
    { id: "ryoshu-chef", sinnerId: "ryoshu", name: "R.B. Chef de Cuisine", img: "img/IDs/ryoshu-chef.png"},
    { id: "ryoshu-wcorp", sinnerId: "ryoshu", name: "W Corp. L3 Cleanup Agent", img: "img/IDs/ryoshu-wcorp.png"},
    { id: "ryoshu-wuthering", sinnerId: "ryoshu", name: "Edgar Family Chief Butler", img: "img/IDs/ryoshu-wuthering.png"},
    { id: "ryoshu-lobotomyego", sinnerId: "ryoshu", name: "Lobotomy EGO: Red Eyes & Penitence", img: "img/IDs/ryoshu-lobotomyego.png"},
    { id: "ryoshu-heishou", sinnerId: "ryoshu", name: "Heishou Pack - Mao Branch", img: "img/IDs/ryoshu-heishou.png"},
    { id: "ryoshu-ncorpego", sinnerId: "ryoshu", name: "N Corp. EGO: Contempt, Awe", img: "img/IDs/ryoshu-ncorpego.png"},
    // Add new Ryoshu IDs here
  ],

  "meursault": [
    { id: "meursault-lcb", sinnerId: "meursault", name: "LCB Sinner", isBase: true, img: "img/IDs/meursault-lcb.png" },
    { id: "meursault-liu", sinnerId: "meursault", name: "Liu Assoc. South Section 6", img: "img/IDs/meursault-liu.png"},
    { id: "meursault-rosespanner", sinnerId: "meursault", name: "Rosespanner Workshop Fixer", img: "img/IDs/meursault-rosespanner.png"},
    { id: "meursault-middle", sinnerId: "meursault", name: "The Middle Little Brother", img: "img/IDs/meursault-middle.png"},
    { id: "meursault-deadrabbit", sinnerId: "meursault", name: "Dead Rabbits Boss", img: "img/IDs/meursault-deadrabbit.png"},
    { id: "meursault-wcorp", sinnerId: "meursault", name: "W Corp. L2 Cleanup Agent", img: "img/IDs/meursault-wcorp.png"},
    { id: "meursault-ncorp", sinnerId: "meursault", name: "N Corp. Großhammer", img: "img/IDs/meursault-ncorp.png"},
    { id: "meursault-rcorp", sinnerId: "meursault", name: "R Corp. 4th Pack Rhino", img: "img/IDs/meursault-rcorp.png"},
    { id: "meursault-blade", sinnerId: "meursault", name: "Blade Lineage Mentor", img: "img/IDs/meursault-blade.png"},
    { id: "meursault-dieci", sinnerId: "meursault", name: "Dieci Assoc. South Section 4 Director", img: "img/IDs/meursault-dieci.png"},
    { id: "meursault-cinq", sinnerId: "meursault", name: "Cinq Assoc. West Section 3", img: "img/IDs/meursault-cinq.png"},
    { id: "meursault-thumb", sinnerId: "meursault", name: "The Thumb East Capo IIIII", img: "img/IDs/meursault-thumb.png"},
    { id: "meursault-bloodfiend", sinnerId: "meursault", name: "The Prince of La Manchaland", img: "img/IDs/meursault-bloodfiend.png"},
    // Add new Meursault IDs here
  ],

  "hong-lu": [
    { id: "hong-lu-lcb", sinnerId: "hong-lu", name: "LCB Sinner", isBase: true, img: "img/IDs/hong-lu-lcb.png" },
    { id: "hong-lu-kurokumo", sinnerId: "hong-lu", name: "Kurokumo Clan Wakashu", img: "img/IDs/hong-lu-kurokumo.png"},
    { id: "hong-lu-liu", sinnerId: "hong-lu", name: "Liu Assoc. South Section 5", img: "img/IDs/hong-lu-liu.png"},
    { id: "hong-lu-wcorp", sinnerId: "hong-lu", name: "W Corp. L2 Cleanup Agent", img: "img/IDs/hong-lu-wcorp.png"},
    { id: "hong-lu-hookoffice", sinnerId: "hong-lu", name: "Hook Office Fixer", img: "img/IDs/hong-lu-hookoffice.png"},
    { id: "hong-lu-fanghuntoffice", sinnerId: "hong-lu", name: "Fanghunt Office Fixer", img: "img/IDs/hong-lu-fanghuntoffice.png"},
    { id: "hong-lu-tingtang", sinnerId: "hong-lu", name: "Tingtang Gang Gangleader", img: "img/IDs/hong-lu-tingtang.png"},
    { id: "hong-lu-kcorp", sinnerId: "hong-lu", name: "K Corp. Class 3 Excision Staff", img: "img/IDs/hong-lu-kcorp.png"},
    { id: "hong-lu-dieci", sinnerId: "hong-lu", name: "Dieci Assoc. South Section 4", img: "img/IDs/hong-lu-dieci.png"},
    { id: "hong-lu-yurodivy", sinnerId: "hong-lu", name: "District 20 Yurodivy", img: "img/IDs/hong-lu-yurodivy.png"},
    { id: "hong-lu-fullstop", sinnerId: "hong-lu", name: "Full-Stop Office Rep", img: "img/IDs/hong-lu-fullstop.png"},
    { id: "hong-lu-rcorp", sinnerId: "hong-lu", name: "R Corp. 4th Pack Reindeer", img: "img/IDs/hong-lu-rcorp.png"},
    { id: "hong-lu-heishou", sinnerId: "hong-lu", name: "The Lord of Hongyuan", img: "img/IDs/hong-lu-heishou.png"},
    // Add new Hong Lu IDs here
  ],

  "heathcliff": [
    { id: "heathcliff-lcb", sinnerId: "heathcliff", name: "LCB Sinner", isBase: true, img: "img/IDs/heathcliff-lcb.png" },
    { id: "heathcliff-shi", sinnerId: "heathcliff", name: "Shi Assoc. South Section 5", img: "img/IDs/heathcliff-shi.png"},
    { id: "heathcliff-ncorp", sinnerId: "heathcliff", name: "N Corp. Kleinhammer", img: "img/IDs/heathcliff-ncorp.png"},
    { id: "heathcliff-seven", sinnerId: "heathcliff", name: "Seven Assoc. South Section 4", img: "img/IDs/heathcliff-seven.png"},
    { id: "heathcliff-multicrack", sinnerId: "heathcliff", name: "MultiCrack Office Fixer", img: "img/IDs/heathcliff-multicrack.png"},
    { id: "heathcliff-rcorp", sinnerId: "heathcliff", name: "R Corp. 4th Pack Rabbit", img: "img/IDs/heathcliff-rcorp.png"},
    { id: "heathcliff-lobotomyego", sinnerId: "heathcliff", name: "Lobotomy EGO: Sunshower", img: "img/IDs/heathcliff-lobotomyego.png"},
    { id: "heathcliff-pequod", sinnerId: "heathcliff", name: "The Pequod Harpooneer", img: "img/IDs/heathcliff-pequod.png"},
    { id: "heathcliff-oufi", sinnerId: "heathcliff", name: "Oufi Assoc. South Section 3", img: "img/IDs/heathcliff-oufi.png"},
    { id: "heathcliff-wuthering", sinnerId: "heathcliff", name: "Wild Hunt", img: "img/IDs/heathcliff-wuthering.png"},
    { id: "heathcliff-fullstop", sinnerId: "heathcliff", name: "Full-Stop Office Fixer", img: "img/IDs/heathcliff-fullstop.png"},
    { id: "heathcliff-kurokumo", sinnerId: "heathcliff", name: "Kurokumo Clan Wakashu", img: "img/IDs/heathcliff-kurokumo.png"},
    { id: "heathcliff-wcorp", sinnerId: "heathcliff", name: "W Corp. L4 Cleanup Agent", img: "img/IDs/heathcliff-wcorp.png"},
    { id: "heathcliff-heishou", sinnerId: "heathcliff", name: "Heishou Pack - You Branch Adept", img: "img/IDs/heathcliff-heishou.png"},
    // Add new Heathcliff IDs here
  ],

  "ishmael": [
    { id: "ishmael-lcb", sinnerId: "ishmael", name: "LCB Sinner", isBase: true, img: "img/IDs/ishmael-lcb.png" },
    { id: "ishmael-shi", sinnerId: "ishmael", name: "Shi Assoc. South Section 5", img: "img/IDs/ishmael-shi.png"},
    { id: "ishmael-lccb", sinnerId: "ishmael", name: "LCCB Assistant Manager", img: "img/IDs/ishmael-lccb.png"},
    { id: "ishmael-lobotomyego", sinnerId: "ishmael", name: "Lobotomy EGO: Sloshing", img: "img/IDs/ishmael-lobotomyego.png"},
    { id: "ishmael-wuthering", sinnerId: "ishmael", name: "Edgar Family Butler", img: "img/IDs/ishmael-wuthering.png"},
    { id: "ishmael-rcorp", sinnerId: "ishmael", name: "R Corp. 4th Pack Reindeer", img: "img/IDs/ishmael-rcorp.png"},
    { id: "ishmael-liu", sinnerId: "ishmael", name: "Liu Assoc. South Section 4", img: "img/IDs/ishmael-liu.png"},
    { id: "ishmael-molar", sinnerId: "ishmael", name: "Molar Boatworks Fixer", img: "img/IDs/ishmael-molar.png"},
    { id: "ishmael-pequod", sinnerId: "ishmael", name: "The Pequod Captain", img: "img/IDs/ishmael-pequod.png"},
    { id: "ishmael-zwei", sinnerId: "ishmael", name: "Zwei Assoc. West Section 3", img: "img/IDs/ishmael-zwei.png"},
    { id: "ishmael-kurokumo", sinnerId: "ishmael", name: "Kurokumo Clan Captain", img: "img/IDs/ishmael-kurokumo.png"},
    { id: "ishmael-heishou", sinnerId: "ishmael", name: "Family Hierarch Candidate", img: "img/IDs/ishmael-heishou.png"},
    { id: "ishmael-jeongoffice", sinnerId: "ishmael", name: "Jeong's Office Rep", img: "img/IDs/ishmael-jeongoffice.png"},
    // Add new Ishmael IDs here
  ],

  "rodion": [
    { id: "rodion-lcb", sinnerId: "rodion", name: "LCB Sinner", isBase: true, img: "img/IDs/rodion-lcb.png" },
    { id: "rodion-lccb", sinnerId: "rodion", name: "LCCB Assistant Manager", img: "img/IDs/rodion-lccb.png"},
    { id: "rodion-ncorp", sinnerId: "rodion", name: "N Corp. Mittelhammer", img: "img/IDs/rodion-ncorp.png"},
    { id: "rodion-zwei", sinnerId: "rodion", name: "Zwei Assoc. South Section 5", img: "img/IDs/rodion-zwei.png"},
    { id: "rodion-tcorp", sinnerId: "rodion", name: "T Corp. Class 2 Collection Staff", img: "img/IDs/rodion-tcorp.png"},
    { id: "rodion-kurokumo", sinnerId: "rodion", name: "Kurokumo Clan Wakashu", img: "img/IDs/rodion-kurokumo.png"},
    { id: "rodion-rosespanner", sinnerId: "rodion", name: "Rosespanner Workshop Rep", img: "img/IDs/rodion-rosespanner.png"},
    { id: "rodion-dieci", sinnerId: "rodion", name: "Dieci Assoc. South Section 4", img: "img/IDs/rodion-dieci.png"},
    { id: "rodion-liu", sinnerId: "rodion", name: "Liu Assoc. South Section 4 Director", img: "img/IDs/rodion-liu.png"},
    { id: "rodion-devyat", sinnerId: "rodion", name: "Devyat' Assoc. North Section 3", img: "img/IDs/rodion-devyat.png"},
    { id: "rodion-bloodfiend", sinnerId: "rodion", name: "The Princess of La Manchaland", img: "img/IDs/rodion-bloodfiend.png"},
    { id: "rodion-heishou", sinnerId: "rodion", name: "Heishou Pack - Si Branch", img: "img/IDs/rodion-heishou.png"},
    { id: "rodion-lobotomyego", sinnerId: "rodion", name: "Lobotomy EGO: The Sword Sharpened with Tears", img: "img/IDs/rodion-lobotomyego.png"},
    // Add new Rodion IDs here
  ],

  "sinclair": [
    { id: "sinclair-lcb", sinnerId: "sinclair", name: "LCB Sinner", isBase: true, img: "img/IDs/sinclair-lcb.png" },
    { id: "sinclair-zweisouth", sinnerId: "sinclair", name: "Zwei Assoc. South Section 6", img: "img/IDs/sinclair-zweisouth.png"},
    { id: "sinclair-mariachi", sinnerId: "sinclair", name: "Los Mariachis Jefe", img: "img/IDs/sinclair-mariachi.png"},
    { id: "sinclair-lobotomyego", sinnerId: "sinclair", name: "Lobotomy EGO: Red Sheet", img: "img/IDs/sinclair-lobotomyego.png"},
    { id: "sinclair-molar", sinnerId: "sinclair", name: "Molar Boatworks Fixer", img: "img/IDs/sinclair-molar.png"},
    { id: "sinclair-zweiwest", sinnerId: "sinclair", name: "Zwei Assoc. West Section 3", img: "img/IDs/sinclair-zweiwest.png"},
    { id: "sinclair-blade", sinnerId: "sinclair", name: "Blade Lineage Salsu", img: "img/IDs/sinclair-blade.png"},
    { id: "sinclair-ncorp", sinnerId: "sinclair", name: "The One Who Shall Grip", img: "img/IDs/sinclair-ncorp.png"},
    { id: "sinclair-cinq", sinnerId: "sinclair", name: "Cinq Assoc. South Section 4 Director", img: "img/IDs/sinclair-cinq.png"},
    { id: "sinclair-dawnoffice", sinnerId: "sinclair", name: "Dawn Office Fixer", img: "img/IDs/sinclair-dawnoffice.png"},
    { id: "sinclair-devyat", sinnerId: "sinclair", name: "Devyat' Assoc. North Section 3", img: "img/IDs/sinclair-devyat.png"},
    { id: "sinclair-middle", sinnerId: "sinclair", name: "The Middle Little Brother", img: "img/IDs/sinclair-middle.png"},
    { id: "sinclair-thumb", sinnerId: "sinclair", name: "The Thumb East Soldato II", img: "img/IDs/sinclair-thumb.png"},
    { id: "sinclair-heishou", sinnerId: "sinclair", name: "Heishou Pack - You Branch", img: "img/IDs/sinclair-heishou.png"},
    // Add new Sinclair IDs here
  ],

  "outis": [
    { id: "outis-lcb", sinnerId: "outis", name: "LCB Sinner", isBase: true, img: "img/IDs/outis-lcb.png" },
    { id: "outis-blade", sinnerId: "outis", name: "Blade Lineage Salsu", img: "img/IDs/outis-blade.png"},
    { id: "outis-gcorp", sinnerId: "outis", name: "G Corp. Head Manager", img: "img/IDs/outis-gcorp.png"},
    { id: "outis-cinq", sinnerId: "outis", name: "Cinq Assoc. South Section 4", img: "img/IDs/outis-cinq.png"},
    { id: "outis-ring", sinnerId: "outis", name: "The Ring Pointillist Student", img: "img/IDs/outis-ring.png"},
    { id: "outis-seven", sinnerId: "outis", name: "Seven Assoc. South Section 6 Director", img: "img/IDs/outis-seven.png"},
    { id: "outis-molar", sinnerId: "outis", name: "Molar Office Fixer", img: "img/IDs/outis-molar.png"},
    { id: "outis-lobotomyego", sinnerId: "outis", name: "Lobotomy EGO: Magic Bullet", img: "img/IDs/outis-lobotomyego.png"},
    { id: "outis-wuthering", sinnerId: "outis", name: "Wuthering Heights Chief Butler", img: "img/IDs/outis-wuthering.png"},
    { id: "outis-wcorp", sinnerId: "outis", name: "W Corp. L3 Cleanup Captain", img: "img/IDs/outis-wcorp.png"},
    { id: "outis-bloodfiend", sinnerId: "outis", name: "The Barber of La Manchaland", img: "img/IDs/outis-bloodfiend.png"},
    { id: "outis-heishou", sinnerId: "outis", name: "Heishou Pack - Mao Branch", img: "img/IDs/outis-heishou.png"},
    { id: "outis-tcorp", sinnerId: "outis", name: "T Corp. Class 3 VDCU Staff", img: "img/IDs/outis-tcorp.png"},
    // Add new Outis IDs here
  ],

  "gregor": [
    { id: "gregor-lcb", sinnerId: "gregor", name: "LCB Sinner", isBase: true, img: "img/IDs/gregor-lcb.png" },
    { id: "gregor-liu", sinnerId: "gregor", name: "Liu Assoc. South Section 6", img: "img/IDs/gregor-liu.png"},
    { id: "gregor-chef", sinnerId: "gregor", name: "R.B. Sous-chef", img: "img/IDs/gregor-chef.png"},
    { id: "gregor-rosespanner", sinnerId: "gregor", name: "Rosespanner Workshop Fixer", img: "img/IDs/gregor-rosespanner.png"},
    { id: "gregor-kurokumo", sinnerId: "gregor", name: "Kurokumo Clan Captain", img: "img/IDs/gregor-kurokumo.png"},
    { id: "gregor-gcorp", sinnerId: "gregor", name: "G Corp. Manager Corporal", img: "img/IDs/gregor-gcorp.png"},
    { id: "gregor-zwei", sinnerId: "gregor", name: "Zwei Assoc. South Section 4", img: "img/IDs/gregor-zwei.png"},
    { id: "gregor-twinhook", sinnerId: "gregor", name: "Twinhook Pirates First Mate", img: "img/IDs/gregor-twinhook.png"},
    { id: "gregor-wuthering", sinnerId: "gregor", name: "Edgar Family Heir", img: "img/IDs/gregor-wuthering.png"},
    { id: "gregor-bloodfiend", sinnerId: "gregor", name: "The Priest of La Manchaland", img: "img/IDs/gregor-bloodfiend.png"},
    { id: "gregor-firefist", sinnerId: "gregor", name: "Firefist Office Survivor", img: "img/IDs/gregor-firefist.png"},
    { id: "gregor-heishou", sinnerId: "gregor", name: "Heishou Pack - Si Branch", img: "img/IDs/gregor-heishou.png"},
    { id: "gregor-nightawls", sinnerId: "gregor", name: "Night Awls Capitano", img: "img/IDs/gregor-nightawls.png"},
    // Add new Gregor IDs here
  ]
};

// --- EGOs per Sinner ---
// rank: "ZAYIN" | "TETH" | "HE" | "WAW" | "ALEPH"
const sinnerEgos = {
  "yi-sang": [
    {
      id: "yi-sang-crow-zayin",
      sinnerId: "yi-sang",
      name: "Crow's Eye View",
      rank: "ZAYIN",
      isBase: true,
      img: "img/EGOs/yi-sang-crow-zayin.png"
    },
    {
      id: "yi-sang-bygone-zayin",
      sinnerId: "yi-sang",
      name: "Bygone Days",
      rank: "ZAYIN",
      img: "img/EGOs/yi-sang-bygone-zayin.png"
    },
    {
      id: "yi-sang-flame-teth",
      sinnerId: "yi-sang",
      name: "4th Match Flame",
      rank: "TETH",
      img: "img/EGOs/yi-sang-flame-teth.png"
    },
    {
      id: "yi-sang-cairn-teth",
      sinnerId: "yi-sang",
      name: "Wishing Cairn",
      rank: "TETH",
      img: "img/EGOs/yi-sang-cairn-teth.png"
    },
    {
      id: "yi-sang-dimension-he",
      sinnerId: "yi-sang",
      name: "Dimension Shredder",
      rank: "HE",
      img: "img/EGOs/yi-sang-dimension-he.png"
    },
    {
      id: "yi-sang-fell-he",
      sinnerId: "yi-sang",
      name: "Fell Bullet",
      rank: "HE",
      img: "img/EGOs/yi-sang-fell-he.png"
    },
    {
      id: "yi-sang-sunshower-waw",
      sinnerId: "yi-sang",
      name: "Sunshower",
      rank: "WAW",
      img: "img/EGOs/yi-sang-sunshower-waw.png"
    },
  ],

  "faust": [
    {
      id: "faust-emitter-zayin",
      sinnerId: "faust",
      name: "Representation Emitter",
      rank: "ZAYIN",
      isBase: true,
      img: "img/EGOs/faust-emitter-zayin.png"
    },
    {
      id: "faust-hex-teth",
      sinnerId: "faust",
      name: "Hex Nail",
      rank: "TETH",
      img: "img/EGOs/faust-hex-teth.png"
    },
    {
      id: "faust-9:2-teth",
      sinnerId: "faust",
      name: "9:2",
      rank: "TETH",
      img: "img/EGOs/faust-9-2-teth.png"
    },
    {
      id: "faust-lasso-teth",
      sinnerId: "faust",
      name: "Lasso",
      rank: "TETH",
      img: "img/EGOs/faust-lasso-teth.png"
    },
    {
      id: "faust-fluid-he",
      sinnerId: "faust",
      name: "Fluid Sac",
      rank: "HE",
      img: "img/EGOs/faust-fluid-he.png"
    },
    {
      id: "faust-telepole-he",
      sinnerId: "faust",
      name: "Telepole",
      rank: "HE",
      img: "img/EGOs/faust-telepole-he.png"
    },
    {
      id: "faust-thoracalgia-he",
      sinnerId: "faust",
      name: "Thoracalgia",
      rank: "HE",
      img: "img/EGOs/faust-thoracalgia-he.png"
    },
    {
      id: "faust-meltdown-he",
      sinnerId: "faust",
      name: "Command: Meltdown",
      rank: "HE",
      img: "img/EGOs/faust-meltdown-he.png"
    },
    {
      id: "faust-everlasting-waw",
      sinnerId: "faust",
      name: "Everlasting",
      rank: "WAW",
      img: "img/EGOs/faust-everlasting-waw.png"
    },
    // Add new Faust EGOs here
  ],

  "don-quixote": [
    {
      id: "don-quixote-sancho-zayin",
      sinnerId: "don-quixote",
      name: "La Sangre de Sancho",
      rank: "ZAYIN",
      isBase: true,
      img: "img/EGOs/don-quixote-sancho-zayin.png"
    },
    {
      id: "don-quixote-stew-teth",
      sinnerId: "don-quixote",
      name: "Lifetime Stew",
      rank: "TETH",
      img: "img/EGOs/don-quixote-stew-teth.png"
    },
    {
      id: "don-quixote-cairn-teth",
      sinnerId: "don-quixote",
      name: "Wishing Cairn",
      rank: "TETH",
      img: "img/EGOs/don-quixote-cairn-teth.png"
    },
    {
      id: "don-quixote-electric-teth",
      sinnerId: "don-quixote",
      name: "Electric Screaming",
      rank: "TETH",
      img: "img/EGOs/don-quixote-electric-teth.png"
    },
    {
      id: "don-quixote-fluid-he",
      sinnerId: "don-quixote",
      name: "Fluid Sac",
      rank: "HE",
      img: "img/EGOs/don-quixote-fluid-he.png"
    },
    {
      id: "don-quixote-telepole-he",
      sinnerId: "don-quixote",
      name: "Telepole",
      rank: "HE",
      img: "img/EGOs/don-quixote-telepole-he.png"
    },
    {
      id: "don-quixote-sheet-he",
      sinnerId: "don-quixote",
      name: "Red Sheet",
      rank: "HE",
      img: "img/EGOs/don-quixote-sheet-he.png"
    },
    {
      id: "don-quixote-mircalla-waw",
      sinnerId: "don-quixote",
      name: "Yearning-Mircalla",
      rank: "WAW",
      img: "img/EGOs/don-quixote-mircalla-waw.png"
    },
    {
      id: "don-quixote-lovehate-waw",
      sinnerId: "don-quixote",
      name: "In the Name of Love and Hate",
      rank: "WAW",
      img: "img/EGOs/don-quixote-lovehate-waw.png"
    },
    // Add new Don EGOs here
  ],

  "ryoshu": [
    {
      id: "ryoshu-forest-zayin",
      sinnerId: "ryoshu",
      name: "Forest for the Flames",
      rank: "ZAYIN",
      isBase: true,
      img: "img/EGOs/ryoshu-forest-zayin.png"
    },
    {
      id: "ryoshu-soda-zayin",
      sinnerId: "ryoshu",
      name: "Soda",
      rank: "ZAYIN",
      img: "img/EGOs/ryoshu-soda-zayin.png"
    },
    {
      id: "ryoshu-redeyes-teth",
      sinnerId: "ryoshu",
      name: "Red Eyes",
      rank: "TETH",
      img: "img/EGOs/ryoshu-redeyes-teth.png"
    },
    {
      id: "ryoshu-obsession-teth",
      sinnerId: "ryoshu",
      name: "Blind Obsession",
      rank: "TETH",
      img: "img/EGOs/ryoshu-obsession-teth.png"
    },
    {
      id: "ryoshu-flame-he",
      sinnerId: "ryoshu",
      name: "4th Match Flame",
      rank: "HE",
      img: "img/EGOs/ryoshu-flame-he.png"
    },
    {
      id: "ryoshu-redeyesopen-he",
      sinnerId: "ryoshu",
      name: "Red Eyes (Open)",
      rank: "HE",
      img: "img/EGOs/ryoshu-redeyesopen-he.png"
    },
    {
      id: "ryoshu-thoracalgia-he",
      sinnerId: "ryoshu",
      name: "Thoracalgia",
      rank: "HE",
      img: "img/EGOs/ryoshu-thoracalgia-he.png"
    },
    {
      id: "ryoshu-contempt-waw",
      sinnerId: "ryoshu",
      name: "Contempt, Awe",
      rank: "WAW",
      img: "img/EGOs/ryoshu-contempt-waw.png"
    },
    // Add new Ryoshu EGOs here
  ],

  "meursault": [
    {
      id: "meursault-chains-zayin",
      sinnerId: "meursault",
      name: "Chains of Others",
      rank: "ZAYIN",
      isBase: true,
      img: "img/EGOs/meursault-chains-zayin.png"
    },
    {
      id: "meursault-screwloose-teth",
      sinnerId: "meursault",
      name: "Screwloose Wallop",
      rank: "TETH",
      img: "img/EGOs/meursault-screwloose-teth.png"
    },
    {
      id: "meursault-regret-teth",
      sinnerId: "meursault",
      name: "Regret",
      rank: "TETH",
      img: "img/EGOs/meursault-regret-teth.png"
    },
    {
      id: "meursault-electric-teth",
      sinnerId: "meursault",
      name: "Electric Screaming",
      rank: "TETH",
      img: "img/EGOs/meursault-electric-teth.png"
    },
    {
      id: "meursault-pursuance-he",
      sinnerId: "meursault",
      name: "Pursuance",
      rank: "HE",
      img: "img/EGOs/meursault-pursuance-he.png"
    },
    {
      id: "meursault-capote-he",
      sinnerId: "meursault",
      name: "Capote",
      rank: "HE",
      img: "img/EGOs/meursault-capote-he.png"
    },
    {
      id: "meursault-mircalla-waw",
      sinnerId: "meursault",
      name: "Yearning-Mircalla",
      rank: "WAW",
      img: "img/EGOs/meursault-mircalla-waw.png"
    },
    {
      id: "meursault-crushbound-waw",
      sinnerId: "meursault",
      name: "Crushbound Past",
      rank: "WAW",
      img: "img/EGOs/meursault-crushbound-waw.png"
    },
    // Add new Meursault EGOs here
  ],

  "hong-lu": [
    {
      id: "hong-lu-illusion-zayin",
      sinnerId: "hong-lu",
      name: "Land of Illusion",
      rank: "ZAYIN",
      isBase: true,
      img: "img/EGOs/hong-lu-illusion-zayin.png"
    },
    {
      id: "hong-lu-desire-teth",
      sinnerId: "hong-lu",
      name: "Roseate Desire",
      rank: "TETH",
      img: "img/EGOs/hong-lu-desire-teth.png"
    },
    {
      id: "hong-lu-soda-teth",
      sinnerId: "hong-lu",
      name: "Soda",
      rank: "TETH",
      img: "img/EGOs/hong-lu-soda-teth.png"
    },
    {
      id: "hong-lu-cavernous-teth",
      sinnerId: "hong-lu",
      name: "Cavernous Wailing",
      rank: "TETH",
      img: "img/EGOs/hong-lu-cavernous-teth.png"
    },
    {
      id: "hong-lu-lasso-teth",
      sinnerId: "hong-lu",
      name: "Lasso",
      rank: "TETH",
      img: "img/EGOs/hong-lu-lasso-teth.png"
    },
    {
      id: "hong-lu-dimension-he",
      sinnerId: "hong-lu",
      name: "Dimension Shredder",
      rank: "HE",
      img: "img/EGOs/hong-lu-dimension-he.png"
    },
    {
      id: "hong-lu-effervescent-he",
      sinnerId: "hong-lu",
      name: "Effervescent Corrosion",
      rank: "HE",
      img: "img/EGOs/hong-lu-effervescent-he.png"
    },
    {
      id: "hong-lu-oneself-he",
      sinnerId: "hong-lu",
      name: "To Remain Oneself",
      rank: "HE",
      img: "img/EGOs/hong-lu-oneself-he.png"
    },
    {
      id: "hong-lu-tarnished-waw",
      sinnerId: "hong-lu",
      name: "Tears of the Tarnished Blood",
      rank: "WAW",
      img: "img/EGOs/hong-lu-tarnished-waw.png"
    },
    // Add new Hong Lu EGOs here
  ],

  "heathcliff": [
    {
      id: "heathcliff-bodysack-zayin",
      sinnerId: "heathcliff",
      name: "Bodysack",
      rank: "ZAYIN",
      isBase: true,
      img: "img/EGOs/heathcliff-bodysack-zayin.png"
    },
    {
      id: "heathcliff-holiday-zayin",
      sinnerId: "heathcliff",
      name: "Holiday",
      rank: "ZAYIN",
      img: "img/EGOs/heathcliff-holiday-zayin.png"
    },
    {
      id: "heathcliff-AEDD-teth",
      sinnerId: "heathcliff",
      name: "AEDD",
      rank: "TETH",
      img: "img/EGOs/heathcliff-AEDD-teth.png"
    },
    {
      id: "heathcliff-fell-teth",
      sinnerId: "heathcliff",
      name: "Fell Bullet",
      rank: "TETH",
      img: "img/EGOs/heathcliff-fell-teth.png"
    },
    {
      id: "heathcliff-telepole-he",
      sinnerId: "heathcliff",
      name: "Telepole",
      rank: "HE",
      img: "img/EGOs/heathcliff-telepole-he.png"
    },
    {
      id: "heathcliff-ya-he",
      sinnerId: "heathcliff",
      name: "Ya Sunyata Tad Rupam",
      rank: "HE",
      img: "img/EGOs/heathcliff-ya-he.png"
    },
    {
      id: "heathcliff-inertia-he",
      sinnerId: "heathcliff",
      name: "Asymmetrical Inertia",
      rank: "HE",
      img: "img/EGOs/heathcliff-inertia-he.png"
    },
    {
      id: "heathcliff-binds-waw",
      sinnerId: "heathcliff",
      name: "Binds",
      rank: "WAW",
      img: "img/EGOs/heathcliff-binds-waw.png"
    },
    // Add new Heathcliff EGOs here
  ],

  "ishmael": [
    {
      id: "ishmael-snagharpoon-zayin",
      sinnerId: "ishmael",
      name: "Snagharpoon",
      rank: "ZAYIN",
      isBase: true,
      img: "img/EGOs/ishmael-snagharpoon-zayin.png"
    },
    {
      id: "ishmael-maggot-zayin",
      sinnerId: "ishmael",
      name: "Hundred-Footed Death Maggot",
      rank: "ZAYIN",
      img: "img/EGOs/ishmael-maggot-zayin.png"
    },
    {
      id: "ishmael-desire-teth",
      sinnerId: "ishmael",
      name: "Roseate Desire",
      rank: "TETH",
      img: "img/EGOs/ishmael-desire-teth.png"
    },
    {
      id: "ishmael-capote-teth",
      sinnerId: "ishmael",
      name: "Capote",
      rank: "TETH",
      img: "img/EGOs/ishmael-capote-teth.png"
    },
    {
      id: "ishmael-bygone-teth",
      sinnerId: "ishmael",
      name: "Bygone Days",
      rank: "TETH",
      img: "img/EGOs/ishmael-bygone-teth.png"
    },
    {
      id: "ishmael-ardor-he",
      sinnerId: "ishmael",
      name: "Ardor Blossom Star",
      rank: "HE",
      img: "img/EGOs/ishmael-ardor-he.png"
    },
    {
      id: "ishmael-wingbeat-he",
      sinnerId: "ishmael",
      name: "Wingbeat",
      rank: "HE",
      img: "img/EGOs/ishmael-wingbeat-he.png"
    },
    {
      id: "ishmael-christmas-he",
      sinnerId: "ishmael",
      name: "Christmas Nightmare",
      rank: "HE",
      img: "img/EGOs/ishmael-christmas-he.png"
    },
    {
      id: "ishmael-tidal-he",
      sinnerId: "ishmael",
      name: "Tidal Elegy",
      rank: "HE",
      img: "img/EGOs/ishmael-tidal-he.png"
    },
    {
      id: "ishmael-obsession-waw",
      sinnerId: "ishmael",
      name: "Blind Obsession",
      rank: "WAW",
      img: "img/EGOs/ishmael-obsession-waw.png"
    },
    // Add new Ishmael EGOs here
  ],

  "rodion": [
    {
      id: "rodion-cast-zayin",
      sinnerId: "rodion",
      name: "What is Cast",
      rank: "ZAYIN",
      isBase: true,
      img: "img/EGOs/rodion-cast-zayin.png"
    },
    {
      id: "rodion-rime-teth",
      sinnerId: "rodion",
      name: "Rime Shank",
      rank: "TETH",
      img: "img/EGOs/rodion-rime-teth.png"
    },
    {
      id: "rodion-effervescent-teth",
      sinnerId: "rodion",
      name: "Effervescent Corrosion",
      rank: "TETH",
      img: "img/EGOs/rodion-effervescent-teth.png"
    },
    {
      id: "rodion-flame-he",
      sinnerId: "rodion",
      name: "4th Match Flame",
      rank: "HE",
      img: "img/EGOs/rodion-flame-he.png"
    },
    {
      id: "rodion-pursuance-he",
      sinnerId: "rodion",
      name: "Pursuance",
      rank: "HE",
      img: "img/EGOs/rodion-pursuance-he.png"
    },
    {
      id: "rodion-hex-he",
      sinnerId: "rodion",
      name: "Hex Nail",
      rank: "HE",
      img: "img/EGOs/rodion-hex-he.png"
    },
    {
      id: "rodion-sanguine-waw",
      sinnerId: "rodion",
      name: "Sanguine Desire",
      rank: "WAW",
      img: "img/EGOs/rodion-sanguine-waw.png"
    },
    {
      id: "rodion-indicants-waw",
      sinnerId: "rodion",
      name: "Indicant's Trial",
      rank: "WAW",
      img: "img/EGOs/rodion-indicants-waw.png"
    },
    // Add new Rodion EGOs here
  ],

  "sinclair": [
    {
      id: "sinclair-branch-zayin",
      sinnerId: "sinclair",
      name: "Branch of Knowledge",
      rank: "ZAYIN",
      isBase: true,
      img: "img/EGOs/sinclair-branch-zayin.png"
    },
    {
      id: "sinclair-cavernous-zayin",
      sinnerId: "sinclair",
      name: "Cavernous Wailing",
      rank: "ZAYIN",
      img: "img/EGOs/sinclair-cavernous-zayin.png"
    },
    {
      id: "sinclair-impending-teth",
      sinnerId: "sinclair",
      name: "Impending Day",
      rank: "TETH",
      img: "img/EGOs/sinclair-impending-teth.png"
    },
    {
      id: "sinclair-stew-teth",
      sinnerId: "sinclair",
      name: "Lifetime Stew",
      rank: "TETH",
      img: "img/EGOs/sinclair-stew-teth.png"
    },
    {
      id: "sinclair-hex-teth",
      sinnerId: "sinclair",
      name: "Hex Nail",
      rank: "TETH",
      img: "img/EGOs/sinclair-hex-teth.png"
    },
    {
      id: "sinclair-lantern-he",
      sinnerId: "sinclair",
      name: "Lantern",
      rank: "HE",
      img: "img/EGOs/sinclair-lantern-he.png"
    },
    {
      id: "sinclair-9:2-he",
      sinnerId: "sinclair",
      name: "9:2",
      rank: "HE",
      img: "img/EGOs/sinclair-9-2-he.png"
    },
    {
      id: "sinclair-tarnished-waw",
      sinnerId: "sinclair",
      name: "Tears of the Tarnished Blood",
      rank: "WAW",
      img: "img/EGOs/sinclair-tarnished-waw.png"
    },
    // Add new Sinclair EGOs here
  ],

  "outis": [
    {
      id: "outis-pathos-zayin",
      sinnerId: "outis",
      name: "To Pathos Mathos",
      rank: "ZAYIN",
      isBase: true,
      img: "img/EGOs/outis-pathos-zayin.png"
    },
    {
      id: "outis-ya-teth",
      sinnerId: "outis",
      name: "Ya Sunyata Tad Rupam",
      rank: "TETH",
      img: "img/EGOs/outis-ya-teth.png"
    },
    {
      id: "outis-sunshower-teth",
      sinnerId: "outis",
      name: "Sunshower",
      rank: "TETH",
      img: "img/EGOs/outis-sunshower-teth.png"
    },
    {
      id: "outis-ebony-he",
      sinnerId: "outis",
      name: "Ebony Stem",
      rank: "HE",
      img: "img/EGOs/outis-ebony-he.png"
    },
    {
      id: "outis-holiday-he",
      sinnerId: "outis",
      name: "Holiday",
      rank: "HE",
      img: "img/EGOs/outis-holiday-he.png"
    },
    {
      id: "outis-dimension-he",
      sinnerId: "outis",
      name: "Dimension Shredder",
      rank: "HE",
      img: "img/EGOs/outis-dimension-he.png"
    },
    {
      id: "outis-magic-he",
      sinnerId: "outis",
      name: "Magic Bullet",
      rank: "HE",
      img: "img/EGOs/outis-magic-he.png"
    },
    {
      id: "outis-binds-waw",
      sinnerId: "outis",
      name: "Binds",
      rank: "WAW",
      img: "img/EGOs/outis-binds-waw.png"
    },
    // Add new Outis EGOs here
  ],

  "gregor": [
    {
      id: "gregor-suddenly-zayin",
      sinnerId: "gregor",
      name: "Suddenly, One Day",
      rank: "ZAYIN",
      isBase: true,
      img: "img/EGOs/gregor-suddenly-zayin.png"
    },
    {
      id: "gregor-legerdemain-zayin",
      sinnerId: "gregor",
      name: "Legerdemain",
      rank: "ZAYIN",
      img: "img/EGOs/gregor-legerdemain-zayin.png"
    },
    {
      id: "gregor-lantern-teth",
      sinnerId: "gregor",
      name: "Lantern",
      rank: "TETH",
      img: "img/EGOs/gregor-lantern-teth.png"
    },
    {
      id: "gregor-bygone-teth",
      sinnerId: "gregor",
      name: "Bygone Days",
      rank: "TETH",
      img: "img/EGOs/gregor-bygone-teth.png"
    },
    {
      id: "gregor-AEDD-he",
      sinnerId: "gregor",
      name: "AEDD",
      rank: "HE",
      img: "img/EGOs/gregor-AEDD-he.png"
    },
    {
      id: "gregor-solemn-he",
      sinnerId: "gregor",
      name: "Solemn Lament",
      rank: "HE",
      img: "img/EGOs/gregor-solemn-he.png"
    },
    {
      id: "gregor-christmas-he",
      sinnerId: "gregor",
      name: "Christmas Nightmare",
      rank: "HE",
      img: "img/EGOs/gregor-christmas-he.png"
    },
    {
      id: "gregor-garden-waw",
      sinnerId: "gregor",
      name: "Garden of Thorns",
      rank: "WAW",
      img: "img/EGOs/gregor-garden-waw.png"
    },
    {
      id: "gregor-unbrilliant-waw",
      sinnerId: "gregor",
      name: "Unbrilliant Glory",
      rank: "WAW",
      img: "img/EGOs/gregor-unbrilliant-waw.png"
    },
    // Add new Gregor EGOs here
  ]
};

// --- Flatten per-Sinner data into global arrays ---
const identities = Object.values(sinnerIdentities).reduce(
  (acc, arr) => acc.concat(arr),
  []
);
const egos = Object.values(sinnerEgos).reduce(
  (acc, arr) => acc.concat(arr),
  []
);

// --- Base IDs/EGOs (always owned) ---
const baseIdentityIds = new Set(
  identities.filter((idn) => idn.isBase).map((idn) => idn.id)
);
const baseEgoIds = new Set(
  egos.filter((ego) => ego.isBase).map((ego) => ego.id)
);

// --- Owned sets (to be replaced by Settings UI later) ---
let userOwnedIdentityIds = new Set(identities.map((idn) => idn.id));
let userOwnedEgoIds = new Set(egos.map((ego) => ego.id));

// --- Ownership check helpers ---
function isIdentityOwned(id) {
  return baseIdentityIds.has(id) || userOwnedIdentityIds.has(id);
}

function isEgoOwned(id) {
  return baseEgoIds.has(id) || userOwnedEgoIds.has(id);
}
