import { useMemo } from 'react';
import generateRandomId from '../helpers/generate-random-id';

/**
 * Данный хук возврщает разные значения на SSR и клиенте.
 * Пользуейтесь им аккуратно.
 * Ждем React 18, чтобы можно было использовать встроенный useId хук.
 *
 * Если до перехода на React 18 потребуется рабочая версия useId хука, то можно посмотреть в сторону
 * https://github.com/reach/reach-ui/blob/develop/packages/auto-id/src/index.tsx
 * Правда этот хук работает неидеально: он возвращает пустую строку на SSR и на первый рендер на клиенте,
 * а затем уже генерит рандомный id - получается лишний ререндер.
 */
const useElementId = (id?: string): string => {
    const elementId = useMemo(() => id || generateRandomId(), [id]);
    return elementId;
};

export default useElementId;
