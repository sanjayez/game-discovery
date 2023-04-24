export interface ThemeButtonProps {
  setTheme: React.Dispatch<React.SetStateAction<boolean>>;
}

export interface Genre {
  games_count: number;
  id: number;
  image_background: string;
  name: string;
  slug: string;
}
