type MenuType = {
  id: string;
  name: string;
  price: number;
  image_url: string;
  options: MenuOptionType[];
  expected_time: string;
  reason: string;
};

type MenuOptionType = {
  id: string;
  name: string;
  max_step: number;
  high_light: boolean;
};
