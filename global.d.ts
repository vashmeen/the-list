declare module TODOList {
   type DB  =  import("./db_types").Database;
   type Attrs<T> = React.ComponentPropsWithoutRef<T>;
   type Attrs<T> = React.ComponentPropsWithoutRef<T>;
   type  Children = { children?: React.ReactNode };
   type  ClassName = { className?: string };
   type  Stl = { style?: React.CSSProperties };
   type  AnyProps = {  [key: string]: any; };
   type  TODO = Database.public.Tables.todo.row;
  } 