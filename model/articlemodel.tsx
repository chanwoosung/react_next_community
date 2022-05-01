type BaseArticle = {
    categoryPk: number;
    categoryName: string;
    pk: number;
    title: string;
    content: string;
    viewCount: number;
    likeCount: number;
    commentCount: number;
    writtenAt: string;
    writerNickName: string;
    writerProfileUrl: string;
}

export type ArticleDetail = BaseArticle & {imageUrl: string[]};
export type ArticleListItem = BaseArticle & {imageUrl: string};