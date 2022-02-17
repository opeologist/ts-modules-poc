const { foo } = await import("@ts-modules-poc/lib");

console.log(foo);

export const App = () => <div>App</div>;
