type RecommendType = {
    id: string;
    name: string;
    image_url: string;
    created_date: string;
    quantity: Number;
    tastes: RecommendOptionType[];
};

type RecommendOptionType = {
    id: string;
    name: string;
    step: Number;
}