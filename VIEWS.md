# Dashboard

  - '/'
    - statystyki dzisiejszych zamówień (zdalne i lokalne)
    - lista rezerwacji i eventów zaplanowanych na dzisaij

# Logowanie

  - '/login'
    - pola na login i hasło
    - guzik do zalogowania (link do dashboardu)
# Widok dostępności stolików

  - '/tables'
    - wybór daty i godziny
    - tabela z lista rezerwacji oraz eventów
      - każda kolumna = 1 stolik
      - każdy wiersz = 30 min
      - ma przypominać widok tygodnia w kalendarzu Google, gdzie w kolumnach zamiast dni są różne stoliki
      - po kliknięciu rezerwacji lub eventu, przechodzimy na strone szczegółów
  - '/tables/booking/:id'
    - zawiera wszystkie informacje dotyczące rezerwacji
    - umożliwia rdycje i zapisanie zmian
  - '/tables/booking/new'
    - analogicznie do powyżej, bez początkowych informacji
  - '/tables/events/:id'
    - analogicznie do powyżej, dla eventów
  - '/tables/events/new'
    - analogicznie do powyżej, dla eventów, bez początkowych informacji

# Widok kelnera

  - '/waiter'
    - tabela
      - w wierszach stoliki
      - w kolumnach różne rodzaje informacji (status, czas od ostatniej aktywności)
      - w ostatniej kolumnie dostępne akcje dla danego stolika
  - '/waiter/order/new'
    - numer stolika (edytowalny)
    - menu produktów
    - opcje wybranego produktu
    - zamówienie (zamówione produkty z opcjami i ceną)
    - kwotę zamówienia
  - '/waiter/order/:id'
    - jak powyższa

# Widok kuchni

  - '/kitchen'
    - wyświetla liste zamówień w kolejności ich złożęnia
    - lista musi zawierać:
      - numer stolika (lub zamówienia zdalnego)
      - pełne informacjie dot. zamówionych dań
      - na liście musi być możliwość oznaczenia zamówienia jako zrealizowane
