# CountPP.user.js
## 概要
ジムリーダーの城の対戦ログの技のPPを数えるGreasemonkey拡張スクリプトです。技名の後ろに [残りPP/最大PP] を挿入します。

ねごと、オウムがえし、ゆびをふる、ころがる、へんしん、ものまね、うらみ、がまんに対応しています。

## 動作環境
- [Firefox](https://www.mozilla.org/ja/firefox/new/)
- [Greasemonkey 4](https://addons.mozilla.org/ja/firefox/addon/greasemonkey/)

## 既知の問題
### あばれる系
あばれる系の技はカウントしません。既に混乱している場合、「疲れ果てて混乱した」メッセージが出ず、正確にカウントできないからです。

### 2ターン技
現在の実装では、2ターン技は攻撃時にカウントしているため、攻撃できなかった場合はズレます。

## ライセンス
2条項BSD
