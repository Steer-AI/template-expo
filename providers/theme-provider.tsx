import { View } from 'react-native';
import { vars } from 'nativewind';

import { useColorScheme } from '@/lib/useColorScheme';
import { colors } from '@/theme/colors';

export default function ThemeProvider({ children }: React.PropsWithChildren) {
  const { colorScheme } = useColorScheme();
  const scheme = colorScheme ?? 'light';
  const themeVars = vars(colors[scheme]);

  return (
    <View style={themeVars} className={scheme === 'dark' ? 'dark flex-1' : 'flex-1'}>
      {children}
    </View>
  );
}
