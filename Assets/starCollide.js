#pragma strict

function OnTriggerEnter2D (other : Collider2D)
{
	Debug.Log(other.name);
	if ("Graham".Equals(other.name))
	{
		Destroy(this.gameObject);
	}
}