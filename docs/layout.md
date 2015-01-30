# Layout

左サイドにJSONから読み込んだ記事データの一覧
右サイドには選んだ記事を`articlegroup`で包んだものを並べる感じにする

```html
<main>
    <div class="draft-article-list">
        <articledatalist>
            ArticleDataList
        </articledatalist>
    </div>
    <div class="candidate-article-list">
        <articlegroup title="ヘッドライン">
            ArticleGroup
            <articledatalist>
                ArticleDataList
                <articledataitem>
                    ArticleDataItem
                </articledataitem>
            </articledatalist>
        </articlegroup>
    </div>
</main>
```

- [画面のレイアウトの構成 by azu · Pull Request #1 · jser/jser-dealer](https://github.com/jser/jser-dealer/pull/1 "[WIP] 画面のレイアウトの構成 by azu · Pull Request #1 · jser/jser-dealer")