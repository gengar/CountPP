// ==UserScript==
// @name            CountPP
// @namespace       gengar.hatenadiary.org
// @include         http://psense.lib.net/PBS/_/*/LLOG.html*
// @include         http://psense.lib.net/PBS/_/*/PS.cgi?ACTION=LLOG*
// @version         1.0.0
// @grant           none
// ==/UserScript==

/*
 *   Copyright (C) 2023, kaki
 *
 *   Redistribution and use in source and binary forms, with or without
 *   modification, are permitted provided that the following conditions
 *   are met:
 *
 *   1. Redistributions of source code must retain the above copyright notice,
 *      this list of conditions and the following disclaimer.
 *
 *   2. Redistributions in binary form must reproduce the above copyright
 *      notice, this list of conditions and the following disclaimer in the
 *      documentation and/or other materials provided with the distribution.
 *
 *   THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS
 *  “AS IS” AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT
 *   LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR
 *   A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT
 *   HOLDER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL,
 *   SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED
 *   TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR
 *   PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF
 *   LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING
 *   NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS
 *   SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
 */

'use strict';

const pokemonNames = ["フシギダネ", "フシギソウ", "フシギバナ", "ヒトカゲ", "リザード", "リザードン", "ゼニガメ", "カメール", "カメックス", "キャタピー", "トランセル", "バタフリー", "ビードル", "コクーン", "スピアー", "ポッポ", "ピジョン", "ピジョット", "コラッタ", "ラッタ", "オニスズメ", "オニドリル", "アーボ", "アーボック", "ピカチュウ", "ライチュウ", "サンド", "サンドパン", "ニドラン♀", "ニドリーナ", "ニドクイン", "ニドラン♂", "ニドリーノ", "ニドキング", "ピッピ", "ピクシー", "ロコン", "キュウコン", "プリン", "プクリン", "ズバット", "ゴルバット", "ナゾノクサ", "クサイハナ", "ラフレシア", "パラス", "パラセクト", "コンパン", "モルフォン", "ディグダ", "ダグトリオ", "ニャース", "ペルシアン", "コダック", "ゴルダック", "マンキー", "オコリザル", "ガーディ", "ウインディ", "ニョロモ", "ニョロゾ", "ニョロボン", "ケーシィ", "ユンゲラー", "フーディン", "ワンリキー", "ゴーリキー", "カイリキー", "マダツボミ", "ウツドン", "ウツボット", "メノクラゲ", "ドククラゲ", "イシツブテ", "ゴローン", "ゴローニャ", "ポニータ", "ギャロップ", "ヤドン", "ヤドラン", "コイル", "レアコイル", "カモネギ", "ドードー", "ドードリオ", "パウワウ", "ジュゴン", "ベトベター", "ベトベトン", "シェルダー", "パルシェン", "ゴース", "ゴースト", "ゲンガー", "イワーク", "スリープ", "スリーパー", "クラブ", "キングラー", "ビリリダマ", "マルマイン", "タマタマ", "ナッシー", "カラカラ", "ガラガラ", "サワムラー", "エビワラー", "ベロリンガ", "ドガース", "マタドガス", "サイホーン", "サイドン", "ラッキー", "モンジャラ", "ガルーラ", "タッツー", "シードラ", "トサキント", "アズマオウ", "ヒトデマン", "スターミー", "バリヤード", "ストライク", "ルージュラ", "エレブー", "ブーバー", "カイロス", "ケンタロス", "コイキング", "ギャラドス", "ラプラス", "メタモン", "イーブイ", "シャワーズ", "サンダース", "ブースター", "ポリゴン", "オムナイト", "オムスター", "カブト", "カブトプス", "プテラ", "カビゴン", "フリーザー", "サンダー", "ファイヤー", "ミニリュウ", "ハクリュー", "カイリュー", "ミュウツー", "ミュウ", "チコリータ", "ベイリーフ", "メガニウム", "ヒノアラシ", "マグマラシ", "バクフーン", "ワニノコ", "アリゲイツ", "オーダイル", "オタチ", "オオタチ", "ホーホー", "ヨルノズク", "レディバ", "レディアン", "イトマル", "アリアドス", "クロバット", "チョンチー", "ランターン", "ピチュー", "ピィ", "ププリン", "トゲピー", "トゲチック", "ネイティ", "ネイティオ", "メリープ", "モココ", "デンリュウ", "キレイハナ", "マリル", "マリルリ", "ウソッキー", "ニョロトノ", "ハネッコ", "ポポッコ", "ワタッコ", "エイパム", "ヒマナッツ", "キマワリ", "ヤンヤンマ", "ウパー", "ヌオー", "エーフィ", "ブラッキー", "ヤミカラス", "ヤドキング", "ムウマ", "アンノーン", "ソーナンス", "キリンリキ", "クヌギダマ", "フォレトス", "ノコッチ", "グライガー", "ハガネール", "ブルー", "グランブル", "ハリーセン", "ハッサム", "ツボツボ", "ヘラクロス", "ニューラ", "ヒメグマ", "リングマ", "マグマッグ", "マグカルゴ", "ウリムー", "イノムー", "サニーゴ", "テッポウオ", "オクタン", "デリバード", "マンタイン", "エアームド", "デルビル", "ヘルガー", "キングドラ", "ゴマゾウ", "ドンファン", "ポリゴン２", "オドシシ", "ドーブル", "バルキー", "カポエラー", "ムチュール", "エレキッド", "ブビィ", "ミルタンク", "ハピナス", "ライコウ", "エンテイ", "スイクン", "ヨーギラス", "サナギラス", "バンギラス", "ルギア", "ホウオウ", "セレビィ"];
const pokemonTable = new Set(pokemonNames);

class MoveSpec {
  constructor(name, pp, kind) {
    this.name = name;
    this.pp = Math.floor(pp / 5 * 8);
    this.kind = kind ?? null;
  }
}

const moveData = [["はたく", 35], ["からてチョップ", 25], ["おうふくビンタ", 20], ["れんぞくパンチ", 15], ["メガトンパンチ", 20], ["ネコにこばん", 20], ["ほのおのパンチ", 15], ["れいとうパンチ", 15], ["かみなりパンチ", 15], ["ひっかく", 35], ["はさむ", 30], ["ハサミギロチン", 5], ["かまいたち", 10], ["つるぎのまい", 30], ["いあいぎり", 30], ["かぜおこし", 35], ["つばさでうつ", 35], ["ふきとばし", 20, "roar"], ["そらをとぶ", 15], ["しめつける", 20], ["たたきつける", 20], ["つるのムチ", 10], ["ふみつけ", 20], ["にどげり", 30], ["メガトンキック", 5], ["とびげり", 25], ["まわしげり", 15], ["すなかけ", 15], ["ずつき", 15], ["つのでつく", 25], ["みだれづき", 20], ["つのドリル", 5], ["たいあたり", 35], ["のしかかり", 15], ["まきつく", 20], ["とっしん", 20], ["あばれる", 20, "thrash"], ["すてみタックル", 15], ["しっぽをふる", 30], ["どくばり", 35], ["ダブルニードル", 20], ["ミサイルばり", 20], ["にらみつける", 30], ["かみつく", 25], ["なきごえ", 40], ["ほえる", 20, "roar"], ["うたう", 15], ["ちょうおんぱ", 20], ["ソニックブーム", 20], ["かなしばり", 20], ["ようかいえき", 30], ["ひのこ", 25], ["かえんほうしゃ", 15], ["しろいきり", 30], ["みずでっぽう", 25], ["ハイドロポンプ", 5], ["なみのり", 15], ["れいとうビーム", 10], ["ふぶき", 5], ["サイケこうせん", 20], ["バブルこうせん", 20], ["オーロラビーム", 20], ["はかいこうせん", 5], ["つつく", 35], ["ドリルくちばし", 20], ["じごくぐるま", 25], ["けたぐり", 20], ["カウンター", 20], ["ちきゅうなげ", 20], ["かいりき", 15], ["すいとる", 20], ["メガドレイン", 10], ["やどりぎのタネ", 10], ["せいちょう", 40], ["はっぱカッター", 25], ["ソーラービーム", 10], ["どくのこな", 35], ["しびれごな", 30], ["ねむりごな", 15], ["はなびらのまい", 20, "thrash"], ["いとをはく", 40], ["りゅうのいかり", 10], ["ほのおのうず", 15], ["でんきショック", 30], ["１０まんボルト", 15], ["でんじは", 20], ["かみなり", 10], ["いわおとし", 15], ["じしん", 10], ["じわれ", 5], ["あなをほる", 10], ["どくどく", 10], ["ねんりき", 25], ["サイコキネシス", 10], ["さいみんじゅつ", 20], ["ヨガのポーズ", 40], ["こうそくいどう", 30], ["でんこうせっか", 30], ["いかり", 20], ["テレポート", 20], ["ナイトヘッド", 15], ["ものまね", 10, "mimic"], ["いやなおと", 40], ["かげぶんしん", 15], ["じこさいせい", 20], ["かたくなる", 30], ["ちいさくなる", 20], ["えんまく", 20], ["あやしいひかり", 15], ["からにこもる", 40], ["まるくなる", 40], ["バリアー", 30], ["ひかりのかべ", 30], ["くろいきり", 30], ["リフレクター", 20], ["きあいだめ", 30], ["がまん", 10, "bide"], ["ゆびをふる", 10, "meta"], ["オウムがえし", 20, "meta"], ["じばく", 5], ["タマゴばくだん", 10], ["したでなめる", 30], ["スモッグ", 20], ["ヘドロこうげき", 20], ["ホネこんぼう", 20], ["だいもんじ", 5], ["たきのぼり", 15], ["からではさむ", 10], ["スピードスター", 20], ["ロケットずつき", 15], ["とげキャノン", 15], ["からみつく", 35], ["ドわすれ", 20], ["スプーンまげ", 15], ["タマゴうみ", 10], ["とびひざげり", 20], ["へびにらみ", 30], ["ゆめくい", 15], ["どくガス", 40], ["たまなげ", 20], ["きゅうけつ", 15], ["あくまのキッス", 10], ["ゴッドバード", 5], ["へんしん", 10, "transform"], ["あわ", 30], ["ピヨピヨパンチ", 10], ["キノコのほうし", 15], ["フラッシュ", 20], ["サイコウェーブ", 15], ["はねる", 40], ["とける", 40], ["クラブハンマー", 10], ["だいばくはつ", 5], ["みだれひっかき", 15], ["ホネブーメラン", 10], ["ねむる", 10], ["いわなだれ", 10], ["ひっさつまえば", 15], ["かくばる", 30], ["テクスチャー", 30], ["トライアタック", 10], ["いかりのまえば", 10], ["きりさく", 20], ["みがわり", 10], ["わるあがき", -1], ["スケッチ", 1], ["トリプルキック", 10], ["どろぼう", 10], ["クモのす", 15], ["こころのめ", 5], ["あくむ", 15], ["かえんぐるま", 25], ["いびき", 15], ["のろい", 10], ["じたばた", 15], ["テクスチャー２", 30], ["エアロブラスト", 5], ["わたほうし", 40], ["きしかいせい", 15], ["うらみ", 10, "spite"], ["こなゆき", 25], ["まもる", 10], ["マッハパンチ", 30], ["こわいかお", 10], ["だましうち", 20], ["てんしのキッス", 10], ["はらだいこ", 10], ["ヘドロばくだん", 10], ["どろかけ", 10], ["オクタンほう", 10], ["まきびし", 20], ["でんじほう", 5], ["みやぶる", 40], ["みちづれ", 5], ["ほろびのうた", 5], ["こごえるかぜ", 15], ["みきり", 5], ["ボーンラッシュ", 10], ["ロックオン", 5], ["げきりん", 15, "thrash"], ["すなあらし", 10], ["ギガドレイン", 5], ["こらえる", 10], ["あまえる", 20], ["ころがる", 20, "rollout"], ["みねうち", 40], ["いばる", 10], ["ミルクのみ", 10], ["スパーク", 20], ["れんぞくぎり", 20], ["はがねのつばさ", 25], ["くろいまなざし", 5], ["メロメロ", 15], ["ねごと", 10, "meta"], ["いやしのすず", 5], ["おんがえし", 20], ["プレゼント", 15], ["やつあたり", 20], ["しんぴのまもり", 25], ["いたみわけ", 20], ["せいなるほのお", 5], ["マグニチュード", 30], ["ばくれつパンチ", 5], ["メガホーン", 10], ["りゅうのいぶき", 20], ["バトンタッチ", 40], ["アンコール", 5], ["おいうち", 20], ["こうそくスピン", 40], ["あまいかおり", 20], ["アイアンテール", 15], ["メタルクロー", 30], ["あてみなげ", 10], ["あさのひざし", 5], ["こうごうせい", 5], ["つきのひかり", 5], ["めざめるパワー", 15], ["クロスチョップ", 5], ["たつまき", 20], ["あまごい", 5], ["にほんばれ", 5], ["かみくだく", 15], ["ミラーコート", 20], ["じこあんじ", 10], ["しんそく", 5], ["げんしのちから", 5], ["シャドーボール", 15], ["みらいよち", 15], ["いわくだき", 15], ["うずしお", 15], ["ふくろだたき", 10]];
const moveTable = new Map(moveData.map(a => [a[0], new MoveSpec(...a)]));

// meta: ねごと オウムがえし ゆびをふる
// rollout: ころがる
// thrash: あばれる げきりん はなびらのまい
// transform: へんしん
// mimic: ものまね
// spite: うらみ
// roar: ほえる ふきとばし
// baton: バトンタッチ
// bide: がまん

function normalizeNobashi(str) {
  return str.replace(/−|－/g, "ー");
}

class Move {
  constructor(spec, mimicked) {
    this.spec = spec;
    this.pp = mimicked ? 5 : spec.pp;
  }
  get name() {
    return this.spec.name;
  }
  get ppMax() {
    return this.spec.pp;
  }
  get kind() {
    return this.spec.kind;
  }
}

class Pokemon {
  constructor(name, transformed = false) {
    this.name = name;
    this.moves = [];
    this.transformed = transformed;
  }
  getMove(name) {
    return this.moves.find(move => move.name === name);
  }
  fetchMove(name) {
    return this.getMove(name) ?? (() => {
      throw new Error(`Pokemon ${this.name} does not have ${name}`);
    })();
  }
  have(name) {
    const move = this.getMove(name);
    if (move) {
      return move;
    }
    else {
      const move = new Move(moveTable.get(name), this.transformed);
      this.moves.push(move);
      return move;
    }
  }
  mimic(name) {
    const move = new Move(moveTable.get(name), true);

    // 過去に同じ技を物真似していた場合、上書き
    const i = this.moves.findIndex(move => move.name === name);
    if (i >= 0) {
      this.moves[i] = move;
    }
    else {
      this.moves.push(move);
    }
  }
  transform() {
    return new Pokemon(this.name, true);
  }
}


class Trainer {
  constructor(name) {
    this.name = name;
    this.pokemons = [];
  }
  have(name) {
    const poke = this.pokemons.find(poke => poke.name === name);
    if (poke) {
      return poke;
    }
    else {
      const poke = new Pokemon(name);
      this.pokemons.push(poke);
      return poke;
    }
  }
}

const trainers = {
  left: new Trainer("left"),
  right: new Trainer("right"),
  other(name) {
    return this[["left", "right"].find(s => s !== name)];
  }
};

const state = {
  left: {},
  right: {}
};

function missed(p) {
  const text = p.querySelector("br")?.nextSibling?.textContent;
  return text && /の攻撃ははずれた。$/.exec(text);
}

const specialMoveDispatcher = {
  meta(p, trainerName) {
    state[trainerName].type = "meta";
  },
  spite(p, trainerName) {
    const targetTrainer = trainers.other(trainerName);
    const targetElm = p.querySelector("br")?.nextElementSibling?.nextElementSibling;
    if (targetElm) { // うらみ成功。失敗時はtextNodeしかない
      const targetMoveElm = targetElm.nextElementSibling;
      const amountText = targetMoveElm.nextSibling.textContent;
      const ma = /^のＰＰを(.)けずった！$/.exec(amountText);
      const amount = ma[1].charCodeAt(0) - "０".charCodeAt(0);
      const targetPoke = targetTrainer.have(targetElm.textContent);
      const targetMove = targetPoke.have(targetMoveElm.textContent);

      targetMove.pp -= amount;
      // console.log("うらみで %s 側の %s の %s のPPを %s 削った at %o",
      //             targetTrainer.name, targetPoke.name, targetMove.name, amount, p);
    }
  },
  mimic(p, trainerName, poke) {
    const text = p.textContent;
    const ma = /は(.*?)を覚えた！$/.exec(text);
    poke.mimic(ma[1]);
  },
  roar(p, trainerName) {
    const b = p.querySelector("br")?.nextElementSibling;
    if (b) {
      const otherState = state[trainers.other(trainerName).name];
      otherState.type = null;
      otherState.transform = null;
      // console.log("ほえる/ふきとばし成功 %s 側チェンジ at %o",
      //             trainers.other(trainerName).name, p);
    }
  },
  baton(p, trainerName) {
    if (p.querySelector("br")?.nextElementSibling) {
      state[trainerName].transform = null;
      // console.log("バトンタッチ成功 %s 側チェンジ at %o", trainerName, p);
    }
  },
  transform(p, trainerName, poke) {
    const st = state[trainerName];
    // へんしん失敗のログがないので適当に成功判定
    if (p.querySelector("br")?.nextElementSibling) {
      st.transform = poke.transform();;
      // console.log("へんしん成功 at %o", p);
    }
  }
};

function dispatchSpecialMove(kind, p, trainerName, poke) {
  const f = specialMoveDispatcher[kind];
  if (f) {
    f(p, trainerName, poke);
  }
  else {
    throw new Error(`unknown move kind ${kind}`);
  }
}

function normalize(x) {
  return x && normalizeNobashi(x);
}

function createPPElement(move, uncertain) {
  const elm = document.createElement("small");
  elm.textContent = `[${uncertain ? "?" : move.pp}/${move.ppMax}]`;
  return elm;
}

for (const p of document.querySelectorAll("p")) {
  const [b1, b2, ..._] = p.querySelectorAll("b");
  const pokeName = normalize(b1?.textContent);
  const moveName = normalize(b2?.textContent);
  const trainerName = p.align;
  const biding = b1?.nextSibling?.textContent === "はがまんしはじめた！";

  if (pokeName && (moveName || biding) && trainerName) {
    const trainer = trainers[trainerName];
    const st = state[trainerName];
    const poke = st.transform ?? trainer.have(pokeName);
    if (biding) {
      const move = poke.have("がまん");
      move.pp--;
      const text = b1.nextSibling;
      text.textContent = "はがまん";
      text.after(createPPElement(move), "しはじめた！");
    }
    else if (moveName === "ふしぎなきのみ") {
      const ma = /で(.*?)のＰＰを回復した！/.exec(b2.nextSibling.textContent);
      poke.fetchMove(ma[1]).pp = 5;
      // console.log("ふしぎなきのみで %s のPPを回復 at %o", ma[1], p);
    }
    else if (b2.nextSibling?.textContent === "を戻して" ||
             b2.nextSibling?.textContent === "を繰り出した！") {
      // console.log("チェンジ at %o", p);
      st.type = null;
      st.transform = null;
    }
    else if (b1.nextSibling?.textContent === "の" && pokemonTable.has(pokeName)) {
      if (moveTable.has(moveName)) {
        const move = poke.have(moveName);

        if (st.type) {
          switch (st.type) {
          case "meta": {
            st.type = null;
            if (move.kind) {
              dispatchSpecialMove(move.kind, p, trainerName, poke);
            }
            continue;
          }
          case "rollout": {
            if (missed(p) || st.turn === 5) {
              st.type = null;
            }
            else {
              st.turn++;
            }
            continue;
          }
          // case "thrash": {
          //   // 既に混乱していたら混乱表示されない問題
          //   const re = /は混乱した！/;
          //   const p1 = p.nextElementSibling;
          //   const p2 = p1?.nextElementSibling;
          //   if (st.pokemon !== poke) {
          //     st.type = null;
          //     break;
          //   }
          //   else if (p1 && re.test(p1.textContent) ||
          //            p2 && re.test(p2.textContent)) {
          //     st.type = null;
          //     continue;
          //   }
          // }
          default:
            throw new Error(`unknown state type ${st.type}`);
          }
        }

        let uncertain = false;

        switch (move.kind) {
        case null: {
          break;
        }
        case "rollout": {
          if (!missed(p)) {
            st.type = "rollout";
            st.turn = 1;
          }
          break;
        }
        case "thrash": {
          // st.type = "thrash";
          uncertain = true;
          break;
        }
        case "bide": {
          continue;
        }
        default:
          if (move.kind) {
            dispatchSpecialMove(move.kind, p, trainerName, poke);
          }
        }
        move.pp--;
        b2.after(createPPElement(move, uncertain));
      }
    }
  }
}
