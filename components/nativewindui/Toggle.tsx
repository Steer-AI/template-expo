import { Switch } from 'react-native';

import { useColorScheme } from '@/lib/useColorScheme';
import { WHITE } from '@/theme/colors';

function Toggle(props: React.ComponentPropsWithoutRef<typeof Switch>) {
  const { colors } = useColorScheme();
  return (
    <Switch
      trackColor={{
        true: colors.primary,
        false: colors.grey,
      }}
      thumbColor={WHITE}
      {...props}
    />
  );
}

export { Toggle };
