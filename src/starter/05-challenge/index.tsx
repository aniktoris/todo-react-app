type Basic = {
  type:'basic';
  name:string;
}

type Advanced = {
  type:'advanced';
  name:string;
  email:string;
}

type BasicAdvanced = Basic | Advanced;

function Component(props: BasicAdvanced) {
  const {type, name} = props;
  if(type === 'basic'){
    return (
      <section className="alert alert-success">
        <h2>user: {name}</h2>
      </section>
    )
  }
  return (
    <section className="alert alert-danger">
      <h2>user: {name}</h2>
      <h2>email: {props.email}</h2>
    </section>
  );
}
export default Component;
