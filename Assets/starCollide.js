#pragma strict

var inventory : Inventory;
//var graham : Collider2D;

function OnTriggerEnter2D (other : Collider2D)
{
	Debug.Log(other.name);
	if ("Graham".Equals(other.name))
	{
		inventory = other.GetComponent.<Inventory>();
		inventory.getStar();
		Destroy(this.gameObject);
	}
}