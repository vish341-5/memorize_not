Read AGENTS.md first and follow it strictly.

Integrate subject selection state. Store the selected subject using Zustand with the modern `@react-native-async-storage/async-storage` package. If an authenticated user has no selected subject, route them to the subject selection screen. Only after selecting a subject should they access the home route (/). Preserve the existing UI exactly.

Add a button on home screen route to clear async storage for testing subject selection state functionality