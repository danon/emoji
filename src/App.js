import emoji from "./emoji.json";

import "./style.css";

function emojiCharacterByName(name) {
  return emoji.emojis[name].skins[0].native;
}

function trans(name) {
  const translations = {
    'rolling_on_the_floor_laughing': 'rotfl',
    'star-struck': 'star_struck',
    'kissing_smiling_eyes': 'kissing_smiling',
    'stuck_out_tongue_winking_eye': 'stuck_out_tongue_wink',
    'money_mouth_face': 'money_mouth',
    'face_with_open_eyes_and_hand_over_mouth': 'hand_over_mouth_open_eyes',
    'face_with_hand_over_mouth': 'hand_over_mouth',
    'face_with_peeking_eye': 'peeking_eye',
    'shushing_face': 'shushing',
    'thinking_face': 'thinking',
    'saluting_face': 'saluting',
    'zipper_mouth_face': 'zipper_mouth',
    'face_with_raised_eyebrow': 'raised_eyebrow',
    'neutral_face': 'neutral',
    'face_with_rolling_eyes': 'rolling_eyes',
    'face_exhaling': 'exhaling',
    'lying_face': 'lying',
    'drooling_face': 'drooling',
    'face_with_thermometer': 'face_thermometer',
    'face_with_head_bandage': 'face_bandage',
    'nauseated_face': 'nauseated',
    'face_vomiting': 'vomiting',
    'sneezing_face': 'sneezing',
    'face_with_spiral_eyes': 'spiral_eyes',
    'face_with_cowboy_hat': 'cowboy_hat_face',
    'partying_face': 'partying',
    'disguised_face': 'disguised',
    'face_with_monocle': 'monocle_face',
    'face_with_diagonal_mouth': 'diagonal_mouth',
    'hushed': 'surprised',
    'smiling_face_with_3_hearts': 'heart_smile',
    'smiling_face_with_tear': 'smile_tear',
    'face_holding_back_tears': 'holding_back_tears',
    'slightly_frowning_face': 'unhappy',
    'white_frowning_face': 'sad',
    'frowning': 'devastated',
    'fox_face': 'fox',
    'jack_o_lantern': 'halloween_pumpkin',
    'ice_cream': 'icecream2',
    'rugby_football': 'rugby',
    'admission_tickets': 'admission_ticket',
    'shallow_pan_of_food': 'pan_of_food',
    'hocho': 'knife',
    'cut_of_meat': 'red_meat',
    'the_horns': 'horns_hand',
    'ear_with_hearing_aid': 'ear_hearing_aid',
    'palms_up_together': 'palms_together',
    'fork_and_knife': 'knife_fork',
    'cheese_wedge': 'cheese',
    'flower_playing_cards': 'playing_card',
    'robot_face': 'robot',
    'smile': 'happy',
    'grinning': 'smile',
    'laughing': 'laugh',
    'pleading_face': 'pleading',
    'waving_black_flag': 'black_flag',
    'face_with_symbols_on_mouth': 'symbols_on_mouth',
    'iphone': 'phone',
    'waving_white_flag': 'white_flag',
    'heavy_heart_exclamation_mark_ornament': 'heart_exclamation',
    'smiley': 'twinkle',
  };

  if (translations.hasOwnProperty(name)) {
    return translations[name];
  }
  if (name === '-1') {
    return '-1';
  }
  return name.replaceAll('-', '_');
}

export default function App() {
  return <div className="App">

    <div className="categories">
      {
        emoji.categories.map(category =>
          <div className="category">
            <h2>
              <pre>{category.id}</pre>
            </h2>
            <ul>
              {category.emojis.map(emoji => <li>
                <span>{emojiCharacterByName(emoji)}</span>
                <pre>:{trans(emoji)}:</pre>
              </li>)}
            </ul>
          </div>
        )
      }
    </div>
  </div>;
}
