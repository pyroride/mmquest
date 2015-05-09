#pragma strict

var inventory : Inventory;
var star : GameObject;
//var graham : Collider2D;

function OnTriggerEnter2D (other : Collider2D)
{
	Debug.Log(other.name);
	if ("Graham".Equals(other.name))
	{
		inventory = other.GetComponent.<Inventory>();
		star = GameObject.Find("Star");
		inventory.pickUpStar(star);
		this.active = false;
	}
}